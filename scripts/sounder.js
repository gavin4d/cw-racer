// Morse Code Audio Generation Component
let audioCtx = null;
let sounderGlobalVolume = 0.5;
let freq = 550;

function setSounderGlobalVolume(volume) {
  sounderGlobalVolume = volume;
}

function restartAudioNeeded() {
  if (audioCtx) {
    return audioCtx.state != 'running';
  }
  return false;
}

function restartAudio() {
  audioCtx?.resume();
}

class Sounder {
  constructor() {
    this.oscillator = null;
    this.gainNode = null;
    this.isInitialized = false;
    this.timeoutID;
  }

  initialize() {
    if (this.isInitialized) return;
    
    if (audioCtx == null) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext)();
    }

    this.oscillator = audioCtx.createOscillator();
    this.gainNode = audioCtx.createGain();
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(audioCtx.destination);
    this.oscillator.frequency.value = freq;
    this.oscillator.type = 'sine';
    this.gainNode.gain.value = sounderGlobalVolume;
    this.oscillator.start();
    this.isInitialized = true;
  }

  setTone(f) {
    // if (!this.isInitialized) this.initialize();
    // this.oscillator.frequency.value = freq;
    freq = f;
  }

  on() {
    if (!this.isInitialized) this.initialize();
    if (audioCtx.state !== 'running') {
      audioCtx.resume();
    }
    clearTimeout(this.timeoutID);
    this.gainNode.gain.setValueAtTime(sounderGlobalVolume, audioCtx.currentTime);
    // this.gainNode.gain.setValueAtTime(sounderGlobalVolume, audioCtx.currentTime);
    this.oscillator.frequency.setTargetAtTime(freq, audioCtx.currentTime, 0.001);
    // this.gainNode.gain.exponentialRampToValueAtTime(sounderGlobalVolume, audioCtx.currentTime + 0.04);
  }

  off() {
    if (!this.isInitialized) return;
    this.oscillator.frequency.setTargetAtTime(1, audioCtx.currentTime, 0.001);
    this.timeoutID = setTimeout(
      () => {
        this.gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      },
      5000
    );
    // this.gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.04);
  }
}
