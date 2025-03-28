// Text to Morse Code Audio Conversion Component

// Morse code patterns mapping (1 for dit, 2 for dah)
const alphabetToMorse = new Map([
    ['A', '12'], ['B', '2111'], ['C', '2121'], ['D', '211'],
    ['E', '1'], ['F', '1121'], ['G', '221'], ['H', '1111'],
    ['I', '11'], ['J', '1222'], ['K', '212'], ['L', '1211'],
    ['M', '22'], ['N', '21'], ['O', '222'], ['P', '1221'],
    ['Q', '2212'], ['R', '121'], ['S', '111'], ['T', '2'],
    ['U', '112'], ['V', '1112'], ['W', '122'], ['X', '2112'],
    ['Y', '2122'], ['Z', '2211'], ['1', '12222'], ['2', '11222'],
    ['3', '11122'], ['4', '11112'], ['5', '11111'], ['6', '21111'],
    ['7', '22111'], ['8', '22211'], ['9', '22221'], ['0', '22222'],
    ['?', '112211'], [',', '221122'], ['.', '121212'], [' ', ' ']
]);

class TextToMorse {
    constructor(sounder) {
        this.sounder = sounder;
        this.isPlaying = false;
        this.defaultOptions = {
            wpm: 20,
            farnsworth: 3,
            tone: 550
        };
    }

    /**
     * Convert text to morse code and play it
     * @param {string} message - Text to convert to morse code
     * @param {Object} options - Playback options
     * @param {number} options.wpm - Words per minute (default: 20)
     * @param {number} options.farnsworth - Farnsworth timing multiplier (default: 3)
     * @param {number} options.tone - Tone frequency in Hz (default: 550)
     * @returns {Promise} Resolves when playback is complete
     */
    async playText(message, options = {}) {
        // Merge options with defaults
        const settings = { ...this.defaultOptions, ...options };
        
        // Calculate timing
        const unitTime = 60 / (50 * settings.wpm) * 1000; // Basic timing unit in milliseconds

        // Stop any current playback
        this.stop();
        this.isPlaying = true;

        try {
            for (let i = 0; i < message.length; i++) {
                if (!this.isPlaying) break;

                const char = message[i].toUpperCase();
                const morseCode = alphabetToMorse.get(char);

                if (!morseCode) continue;

                if (char === ' ') {
                    await this.delay(unitTime * 7 * settings.farnsworth);
                } else {
                    await this.playMorseSequence(morseCode, unitTime, settings);
                    // Add inter-letter spacing
                    await this.delay(unitTime * 3 * settings.farnsworth);
                }
            }
        } finally {
            this.isPlaying = false;
        }
    }

    /**
     * Play a morse code sequence for a single character
     * @private
     */
    async playMorseSequence(sequence, unitTime, settings) {
        for (let i = 0; i < sequence.length; i++) {
            if (!this.isPlaying) break;

            const symbol = sequence[i];
            if (symbol === '1') { // dit
                this.sounder.setTone(settings.tone);
                this.sounder.on();
                await this.delay(unitTime);
                this.sounder.off();
                await this.delay(unitTime); // Inter-element space
            } else if (symbol === '2') { // dah
                this.sounder.setTone(settings.tone);
                this.sounder.on();
                await this.delay(unitTime * 3);
                this.sounder.off();
                await this.delay(unitTime); // Inter-element space
            }
        }
    }

    /**
     * Stop current playback
     */
    stop() {
        this.isPlaying = false;
        this.sounder.off();
    }

    /**
     * Utility method for creating delays
     * @private
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Convert text to morse code pattern (for display purposes)
     * @param {string} text - Text to convert
     * @returns {string} Morse code pattern using dots and dashes
     */
    static textToPattern(text) {
        return text.toUpperCase().split('').map(char => {
            const morse = alphabetToMorse.get(char);
            if (!morse) return '';
            if (char === ' ') return '   ';
            return morse.replace(/1/g, '.').replace(/2/g, '-');
        }).join(' ');
    }
}
