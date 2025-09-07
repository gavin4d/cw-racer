const alphabetToMorse = new Map([
		["A", "12"],
		["B", "2111"],
		["C", "2121"],
		["D", "211"],
		["E", "1"],
		["F", "1121"],
		["G", "221"],
		["H", "1111"],
		["I", "11"],
		["J", "1222"],
		["K", "212"],
		["L", "1211"],
		["M", "22"],
		["N", "21"],
		["O", "222"],
		["P", "1221"],
		["Q", "2212"],
		["R", "121"],
		["S", "111"],
		["T", "2"],
		["U", "112"],
		["V", "1112"],
		["W", "122"],
		["X", "2112"],
		["Y", "2122"],
		["Z", "2211"],
		["1", "12222"],
		["2", "11222"],
		["3", "11122"],
		["4", "11112"],
		["5", "11111"],
		["6", "21111"],
		["7", "22111"],
		["8", "22211"],
		["9", "22221"],
		["0", "22222"],
		[".", "121212"],
		[",", "221122"],
		["/", "21121"],
		["?", "112211"],
		["!", "212122"],
		["-", "211112"],
		["(", "21221"],
		[")", "212212"],
		[":", "222111"],
		[" ", "4"],
]);

class Encoder {
    
    constructor(sounder, decoder) {
				this.sounder = sounder; // sounder instance
				this.decoder = decoder; // use decoder instance to get timings
        this.queue = [];
        this.sending = false;
        this.lastKey = null;
        this.timeout1 = 0;
        this.timeout2 = 0;
        this.timeout3 = 0;
    }

    setTone(tone){
        this.tone = tone;
    }

    sendLetter(letter) {
        var sequence = alphabetToMorse.get(letter.toUpperCase());
        if (!sequence) return;
        this.queue = this.queue.concat(sequence.split('').map(Number));
        this.queue.push('3');
        this.processQueue();
    }

    sendWord(word) {
    	word.split('').forEach(letter => {
	    		this.sendLetter(letter);
    	});
    	this.sendLetter(" ");
    }

    stopSend() {
        clearTimeout(this.timeout1);
        clearTimeout(this.timeout2);
        clearTimeout(this.timeout3);
        this.queue = [];
        this.sending = false;
        this.sounder.off();
    }

    sendSignal() {
        if (restartAudioNeeded()) {
            restartAudio();
        }
        this.sounder.on();
    }

    stopSignal() {
        this.sounder.off();
        this.timeout1 = setTimeout(() => {
            this.sending = false;
            this.processQueue();
        }, this.decoder.unit);
    }

    processQueue() {
        if (!this.sending && this.queue.length) {
        		this.sending = true;
            this.lastKey = this.queue.shift();
            if (this.lastKey > 2) {
	            	var delayLength = this.lastKey * this.decoder.unit * Math.max(1, this.decoder.farnsworth || 1);
	            	console.log(Math.max(1, this.decoder.farnsworth || 1));
	            	this.timeout2 = setTimeout(() => {
		            		this.sending = false;
		            		this.processQueue();
	            	}, delayLength);
	            	return;
            } else {
		            var signalLength = (this.lastKey == 1) ? this.decoder.unit : this.decoder.unit * 3;
		            this.sendSignal();
		            this.timeout3 = setTimeout(() => {
		                this.stopSignal();
		            }, signalLength);
            }
        }
    }
}