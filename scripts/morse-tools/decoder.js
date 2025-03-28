const morseToAlphabet = new Map([
	["12", "A"],
	["2111", "B"],
	["2121", "C"],
	["211", "D"],
	["1", "E"],
	["1121", "F"],
	["221", "G"],
	["1111", "H"],
	["11", "I"],
	["1222", "J"],
	["212", "K"],
	["1211", "L"],
	["22", "M"],
	["21", "N"],
	["222", "O"],
	["1221", "P"],
	["2212", "Q"],
	["121", "R"],
	["111", "S"],
	["2", "T"],
	["112", "U"],
	["1112", "V"],
	["122", "W"],
	["2112", "X"],
	["2122", "Y"],
	["2211", "Z"],
    ["12222", "1"],
    ["11222", "2"],
    ["11122", "3"],
    ["11112", "4"],
    ["11111", "5"],
    ["21111", "6"],
    ["22111", "7"],
    ["22211", "8"],
    ["22221", "9"],
    ["22222", "0"],
	["121212", "."],
    ["221122", ","],
    ["21121", "/"],
    ["112211", "?"],
    ["212122", "!"],
    ["211112", "-"],
    ["21221", "("],
    ["212212", ")"],
    ["222111", ":"],
]);

class Decoder {
	constructor(onLetterDecoded) {
		this.onLetterDecoded = onLetterDecoded; // Store the callback function
		this.lastLetter = '';
		this.decodeArray = ''; // Stores '1' for dit, '2' for dah
		this.unit = 80; // adjustment: short dit reduces, long dah lengthens
		this.keyStartTime = null; // Timestamp when key went down
		this.keyEndTime = null;   // Timestamp when key went up
		this.spaceTimer = null;
        this.farnsworth = 3;
		this.wordTimer = null; // Timer for word boundaries
		this.wordTimeout = this.unit * 7; // A typical word gap is 7 units

 		// Store recent classified timings for stats
 		this.maxHistory = 20;
		this.recentDits = [];
		this.recentDahs = [];
		this.recentIntraCharSpaces = [];
		this.recentInterCharSpaces = []; // Note: Inter-char space is trickier, depends on Farnsworth

		// For visual timing bar
		this.currentLetterTimings = []; // Stores { type: 'mark'/'space', duration: ms } for the letter being keyed
		this.lastLetterTimings = null; // Stores timings for the most recently completed letter
	}

	keyOn() {
		clearTimeout(this.spaceTimer);
		clearTimeout(this.wordTimer); // Clear the wordTimer as well since we are receiving input

		const now = Date.now();

		// Classify and record space duration if applicable
		if (this.keyEndTime) { // Check if there was a previous keyOff
			const spaceDuration = now - this.keyEndTime;
			// Simple classification (can be refined): > 2 units = inter-char, otherwise intra-char
			// TODO: Refine space classification using Farnsworth setting
			if (spaceDuration > this.unit * 2) { // Arbitrary threshold for now
				this.addTimingStat(this.recentInterCharSpaces, spaceDuration);
			} else if (spaceDuration > this.unit * 0.4) { // Avoid tiny spaces from key bounce (0.4 * unit)
				this.addTimingStat(this.recentIntraCharSpaces, spaceDuration);
				// Also store for visual bar
				this.currentLetterTimings.push({ type: 'space', duration: spaceDuration });
			}
		}
		this.keyStartTime = now; // Record start time of the mark
	}

	keyOff() {
		this.keyEndTime = Date.now();
		var keyDuration = (this.keyStartTime) ? this.keyEndTime - this.keyStartTime : 0;

		// Record the mark duration
		// Classify and record mark duration
		if (keyDuration > 0) {
			// Classify based on comparison to unit length (e.g., midpoint)
			const ditDahThreshold = this.unit * 2; // ~ midpoint between dit (1) and dah (3)
			if (keyDuration < ditDahThreshold) {
				this.addTimingStat(this.recentDits, keyDuration); // Store duration
				this.registerDit(); // Register first to potentially adjust unit
			} else {
				this.addTimingStat(this.recentDahs, keyDuration); // Store duration
				this.registerDah(); // Register first to potentially adjust unit
			}
			// Also store for visual bar
			this.currentLetterTimings.push({ type: 'mark', duration: keyDuration });
		}

		// The registerDit/Dah calls below handle the unit adjustment and building decodeArray

        let spaceTime = this.unit * this.farnsworth;
		this.spaceTimer = setTimeout(() => { // end sequence and decode letter
			this.updateLastLetter(this.morseToLetter(this.decodeArray));
			this.decodeArray = ''; // Clear pattern *after* decoding
			this.startWordTimer(); // Start the word timer after finishing a letter
		}, spaceTime, "keyOff");
	}

	registerDit() {
		// Logic moved to keyOff for timing capture before unit adjustment
		 this.decodeArray += '1';
	}

	registerDah() {
		// Logic moved to keyOff for timing capture before unit adjustment
		 this.decodeArray += '2';
	}

	updateLastLetter(letter) {
		//updateCurrentLetter(letter);
		this.lastLetter = letter;

		// Store the timings for the completed letter (for visual bar) and reset for the next one
		this.lastLetterTimings = [...this.currentLetterTimings];
		this.currentLetterTimings = [];

		// Notify the callback function that a new letter is decoded
        if (this.onLetterDecoded) {
            this.onLetterDecoded(letter);
        }
	}

	morseToLetter(sequence) {
		var letter = morseToAlphabet.get(sequence);
		if (letter) {
			return letter;
		} else {
			return '*';
		}
	}

	startWordTimer() {
		// Set up the word timer to add a space after a word boundary
		this.wordTimer = setTimeout(() => {
			// Update with a space to indicate a word boundary
			if (this.onLetterDecoded) {
				this.onLetterDecoded(' ');
			}
		}, this.wordTimeout);
	}

    calculateWpm() {
        return 60000 / (this.unit * 50);
    }

    setFarnsworth(farnsworth) {
        this.farnsworth = farnsworth;
    }

    getLastLetterTimings() {
		return this.lastLetterTimings;
    }

    // Helper to add timing to stats array, keeping max history
	addTimingStat(array, duration) {
		array.push(duration);
		if (array.length > this.maxHistory) {
			array.shift(); // Remove the oldest entry
		}
	}

    // Getters for recent timings
	getRecentDits() { return this.recentDits; }
	getRecentDahs() { return this.recentDahs; }
	getRecentIntraCharSpaces() { return this.recentIntraCharSpaces; }
	getRecentInterCharSpaces() { return this.recentInterCharSpaces; }

    // Method to clear stats
	clearStats() {
		this.recentDits = [];
		this.recentDahs = [];
		this.recentIntraCharSpaces = [];
		this.recentInterCharSpaces = [];
 	}
}