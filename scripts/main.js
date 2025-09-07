// TODO:
// add bug
// prevent exeeding copy mode sound
// straight key timing stats
// stats graph
// test config
// favicon

window.onload = function () {
    const common_words = ["a", "ability", "able", "about", "above", "accept", "according", "account", "across", "act", "action", "activity", "actually", "add", "address", "administration", "admit", "adult", "affect", "after", "again", "against", "age", "agency", "agent", "ago", "agree", "agreement", "ahead", "air", "all", "allow", "almost", "alone", "along", "already", "also", "although", "always", "American", "among", "amount", "analysis", "and", "animal", "another", "answer", "any", "anyone", "anything", "appear", "apply", "approach", "area", "argue", "arm", "around", "arrive", "art", "article", "artist", "as", "ask", "assume", "at", "attack", "attention", "attorney", "audience", "author", "authority", "available", "avoid", "away", "baby", "back", "bad", "bag", "ball", "bank", "bar", "base", "be", "beat", "beautiful", "because", "become", "bed", "before", "begin", "behavior", "behind", "believe", "benefit", "best", "better", "between", "beyond", "big", "bill", "billion", "bit", "black", "blood", "blue", "board", "body", "book", "born", "both", "box", "boy", "break", "bring", "brother", "budget", "build", "building", "business", "but", "buy", "by", "call", "camera", "campaign", "can", "cancer", "candidate", "capital", "car", "card", "care", "career", "carry", "case", "catch", "cause", "cell", "center", "central", "century", "certain", "certainly", "chair", "challenge", "chance", "change", "character", "charge", "check", "child", "choice", "choose", "church", "citizen", "city", "civil", "claim", "class", "clear", "clearly", "close", "coach", "cold", "collection", "college", "color", "come", "commercial", "common", "community", "company", "compare", "computer", "concern", "condition", "conference", "Congress", "consider", "consumer", "contain", "continue", "control", "cost", "could", "country", "couple", "course", "court", "cover", "create", "crime", "cultural", "culture", "cup", "current", "customer", "cut", "dark", "data", "daughter", "day", "dead", "deal", "death", "debate", "decade", "decide", "decision", "deep", "defense", "degree", "Democrat", "democratic", "describe", "design", "despite", "detail", "determine", "develop", "development", "die", "difference", "different", "difficult", "dinner", "direction", "director", "discover", "discuss", "discussion", "disease", "do", "doctor", "dog", "door", "down", "draw", "dream", "drive", "drop", "drug", "during", "each", "early", "east", "easy", "eat", "economic", "economy", "edge", "education", "effect", "effort", "eight", "either", "election", "else", "employee", "end", "energy", "enjoy", "enough", "enter", "entire", "environment", "environmental", "especially", "establish", "even", "evening", "event", "ever", "every", "everybody", "everyone", "everything", "evidence", "exactly", "example", "executive", "exist", "expect", "experience", "expert", "explain", "eye", "face", "fact", "factor", "fail", "fall", "family", "far", "fast", "father", "fear", "federal", "feel", "feeling", "few", "field", "fight", "figure", "fill", "film", "final", "finally", "financial", "find", "fine", "finger", "finish", "fire", "firm", "first", "fish", "five", "floor", "fly", "focus", "follow", "food", "foot", "for", "force", "foreign", "forget", "form", "former", "forward", "four", "free", "friend", "from", "front", "full", "fund", "future", "game", "garden", "gas", "general", "generation", "get", "girl", "give", "glass", "go", "goal", "good", "government", "great", "green", "ground", "group", "grow", "growth", "guess", "gun", "guy", "hair", "half", "hand", "hang", "happen", "happy", "hard", "have", "he", "head", "health", "hear", "heart", "heat", "heavy", "help", "her", "here", "herself", "high", "him", "himself", "his", "history", "hit", "hold", "home", "hope", "hospital", "hot", "hotel", "hour", "house", "how", "however", "huge", "human", "hundred", "husband", "I", "idea", "identify", "if", "image", "imagine", "impact", "important", "improve", "in", "include", "including", "income", "increase", "indeed", "indicate", "individual", "industry", "information", "inside", "instead", "institution", "interest", "interesting", "international", "interview", "into", "investment", "involve", "issue", "it", "itself", "job", "join", "just", "keep", "key", "kid", "kill", "kind", "kitchen", "know", "knowledge", "land", "language", "large", "last", "late", "later", "laugh", "law", "lawyer", "lay", "lead", "leader", "learn", "least", "leave", "left", "leg", "less", "let", "letter", "level", "lie", "life", "light", "like", "likely", "line", "list", "listen", "little", "live", "local", "long", "look", "lose", "loss", "lot", "love", "low", "machine", "magazine", "main", "maintain", "major", "majority", "make", "man", "manage", "management", "manager", "many", "market", "marriage", "material", "matter", "may", "maybe", "me", "mean", "measure", "media", "medical", "meet", "meeting", "member", "memory", "mention", "message", "method", "middle", "might", "mile", "military", "million", "mind", "minute", "miss", "mission", "model", "modern", "moment", "money", "month", "more", "morning", "most", "mother", "mouth", "move", "movement", "movie", "much", "music", "must", "my", "myself", "name", "nation", "national", "natural", "nature", "near", "nearly", "necessary", "need", "network", "never", "new", "news", "next", "nice", "night", "no", "none", "nor", "north", "not", "note", "nothing", "notice", "now", "number", "occur", "of", "off", "offer", "office", "officer", "official", "often", "oh", "oil", "ok", "old", "on", "once", "one", "only", "onto", "open", "operate", "opportunity", "option", "or", "order", "organization", "other", "others", "our", "ourselves", "out", "outside", "over", "own", "owner", "page", "pain", "paint", "paper", "parent", "part", "participant", "particular", "party", "pass", "past", "patient", "pay", "peace", "people", "per", "perform", "performance", "perhaps", "period", "person", "personal", "phone", "physical", "pick", "picture", "piece", "place", "plan", "plant", "play", "player", "point", "police", "policy", "political", "poor", "popular", "population", "position", "positive", "possible", "power", "practice", "prepare", "present", "president", "press", "pressure", "pretty", "prevent", "price", "private", "probably", "problem", "process", "produce", "product", "production", "professional", "professor", "program", "project", "property", "protect", "prove", "provide", "public", "pull", "purpose", "push", "put", "quality", "question", "quick", "quickly", "quite", "race", "radio", "raise", "range", "rate", "rather", "reach", "read", "ready", "real", "reality", "realize", "really", "reason", "receive", "recent", "recently", "recognize", "record", "red", "reduce", "reflect", "region", "relate", "relationship", "religious", "remain", "remember", "remove", "report", "represent", "Republican", "require", "research", "resource", "respond", "response", "responsibility", "rest", "result", "return", "reveal", "rich", "ride", "right", "rise", "risk", "road", "rock", "role", "room", "rule", "run", "safe", "same", "save", "say", "scene", "school", "science", "scientist", "score", "sea", "search", "season", "seat", "second", "secret", "section", "security", "see", "seek", "seem", "sell", "send", "senior", "sense", "series", "serious", "serve", "service", "set", "seven", "several", "sex", "sexual", "shake", "share", "she", "shoot", "short", "shot", "should", "shoulder", "show", "side", "sign", "significant", "similar", "simple", "simply", "since", "sing", "single", "sister", "sit", "site", "situation", "six", "size", "skill", "skin", "small", "smile", "so", "social", "society", "some", "somebody", "someone", "something", "sometimes", "son", "song", "soon", "sorry", "sort", "sound", "south", "space", "speak", "special", "specific", "speech", "spend", "sport", "spring", "staff", "stage", "stand", "standard", "star", "start", "state", "statement", "station", "stay", "step", "still", "stop", "store", "story", "strategy", "street", "strong", "structure", "student", "study", "stuff", "style", "subject", "success", "successful", "such", "suddenly", "suffer", "suggest", "summer", "support", "sure", "surface", "system", "table", "take", "talk", "task", "tax", "teach", "teacher", "team", "technology", "television", "tell", "ten", "tend", "term", "test", "than", "thank", "that", "the", "their", "them", "themselves", "then", "theory", "there", "these", "they", "thing", "think", "third", "this", "those", "though", "thought", "thousand", "threat", "three", "through", "throughout", "throw", "thus", "time", "to", "today", "together", "tonight", "too", "top", "total", "tough", "toward", "town", "trade", "traditional", "training", "travel", "treat", "tree", "trial", "trip", "trouble", "true", "truth", "try", "turn", "TV", "two", "type", "under", "understand", "unit", "until", "up", "upon", "us", "use", "usually", "value", "various", "very", "victim", "victory", "video", "view", "violence", "visit", "voice", "vote", "wait", "walk", "wall", "want", "war", "watch", "water", "way", "we", "wear", "weather", "week", "weight", "well", "west", "what", "whatever", "when", "where", "whether", "which", "while", "white", "who", "whole", "whom", "whose", "why", "wide", "wife", "will", "win", "wind", "window", "wish", "with", "within", "without", "woman", "wonder", "word", "work", "worker", "world", "worry", "would", "write", "writer", "wrong", "yard", "yeah", "year", "yes", "yet", "you", "young", "your", "yourself", "youth", "zero", "zone", "year", "yesterday", "yet", "zoo"];
    const q_codes = ['QRA', 'QRB', 'QRC', 'QRD', 'QRE', 'QRF', 'QRG', 'QRH', 'QRI', 'QRJ', 'QRK', 'QRL', 'QRM', 'QRN', 'QRO', 'QRP', 'QRQ', 'QRS', 'QRT', 'QRU', 'QRV', 'QRW', 'QRX', 'QRY', 'QRZ', 'QSA', 'QSB', 'QSC', 'QSD', 'QSE', 'QSF', 'QSG', 'QSH', 'QSI', 'QSJ', 'QSK', 'QSL', 'QSM', 'QSN', 'QSO', 'QSP', 'QSQ', 'QSR', 'QSS', 'QST', 'QSU', 'QSV', 'QSW', 'QSX', 'QSY', 'QSZ', 'QTA', 'QTB', 'QTC', 'QTE', 'QTF', 'QTG', 'QTH', 'QTI', 'QTJ', 'QTK', 'QTL'];
    let custom_words = [];
    let wordPos = 0; // The current word
    let letterPos = 0; // The current letter in the current word
    let correctCount = 0;
    let correctUnitCount = 0;
    let lateCount = 0;
    let incorrectCount = 0;
    let targetInput = [];
    var rxtxMode = 1; // 0: copy, 1: transmit
    var freeMode = false;
    var started = false;
    var ended = false;
    let startTime = 0;
    let endTime = 0;
    let mobile = false;

    // Find document elements
    let targetInputObj = document.getElementById('targetInput');

    // Initialize components
    const sounder = new Sounder();
    // Generates the random practice words
    function generateWordlist(count) {
        const checkboxes = document.querySelectorAll("#wordlist input[type='checkbox']");
        const genFuncions = [];
        if (checkboxes[1].checked) { // callsigns
            genFuncions.push(function() {
                targetInput.push(generateCallsign());
            });
        }
        if (checkboxes[2].checked) { // Q-codes
            genFuncions.push(function() {
                targetInput.push(q_codes[Math.floor(Math.random() * q_codes.length)]);
            });
        }
        if (checkboxes[3].checked) { // custom
            genFuncions.push(function() {
                targetInput.push(custom_words[Math.floor(Math.random() * custom_words.length)]);
            });
        }
        if (checkboxes[0].checked) { // 1k words
            genFuncions.push(function() {
                targetInput.push(common_words[Math.floor(Math.random() * common_words.length)]);
            });
        }
        freeMode = genFuncions.length == 0; // free mode
        wordPos = 0;
        letterPos = 0;
        targetInput = [];
        if (freeMode) {
            appendLetter(' '); // make sure there is something for the caret to move to
            return;
        }
        for (let i = 0; i < count; i++) {
            genFuncions[Math.floor(Math.random() * genFuncions.length)]();
        }
        updateTargetInput();
    }

    // Displays the practice words to the user
    function updateTargetInput() {
        targetInput.forEach(targetWord => {
            // Create a word element for each word in the target input
            let word = document.createElement("word");
            targetWord.split('').forEach(letter => {
                // Create a letter element for each letter in the word
                var letterObj = document.createElement("letter");
                letterObj.textContent = letter;
                word.appendChild(letterObj);
            });
            // Add an additional letter element is needed to align the caret
            var letter = document.createElement("letter");
            letter.textContent = " ";
            word.appendChild(letter);
            targetInputObj.appendChild(word);

        });
    }

    function appendLetter(letter) {
        const words = document.querySelectorAll("#targetInput > word");
        var lastWord = words[words.length - 1];

        if (words.length == 0 || letter == ' ') {
            // const looseLetters = document.querySelectorAll("#targetInput > letter");
            lastWord = document.createElement("word");
            let letterObj = document.createElement("letter");
            // letter.textContent = " ";
            lastWord.appendChild(letterObj);
            targetInputObj.appendChild(lastWord);
        }
        
        if (letter != ' ') {
            let letterObj = document.createElement("letter");
            letterObj.textContent = letter;
            letterObj.classList.add("correct");
            lastWord.insertBefore(letterObj, lastWord.lastChild);
        }

        wordPos = targetInputObj.children.length - 1;
        letterPos = targetInputObj.children[wordPos].children.length - 1;
        updateCaretPosition();
        
        // var caret = document.getElementById("caret");
        // var caretOrigin = document.querySelector(".carrots-crate").getBoundingClientRect();
        // var current_letter_pos = lastWord.lastChild.getBoundingClientRect();
        // caret.style.left = (current_letter_pos.right - caretOrigin.right) + "px";
        // if () caret.style.top = (current_letter_pos.top - caretOrigin.top) + "px";
    }

    // Moves the visual cursor to the correct location
    function updateCaretPosition() {
        var caret = document.getElementById("caret");
        var caretOrigin = document.querySelector(".carrots-crate").getBoundingClientRect();
        var current_letter_pos = targetInputObj.children[wordPos].children[letterPos].getBoundingClientRect();
        caret.style.left = (current_letter_pos.left - caretOrigin.left - 2) + "px";
        caret.style.top = (current_letter_pos.top - caretOrigin.top) + "px";
    }

    // Returns the letter the user needs to input to continue
    function getCurrentLetter() {
        if (letterPos >= targetInput[wordPos].length) {
            return " "; // Return a space at the end of each word
        }
        return targetInput[wordPos][letterPos];
    }

    // Run when correct letter is inputted
    function correctLetter(letter) {
        if (ended == true) return;
        console.log("correct");
        var letterObj = targetInputObj.children[wordPos].children[letterPos];
        letterObj.classList.add("correct");
        correctCount++;
        const sequence = ditdahMap[letter.toUpperCase()];
        if (sequence) {
            correctUnitCount += 2 + 2 * (sequence.match(/1/g) || []).length + 4 * (sequence.match(/2/g) || []).length;
        } else {
            correctUnitCount += 4;
        }
    }

    function incrementCharacter() {
        letterPos++;
        if (wordPos >= targetInput.length - 1 && letterPos >= targetInput[wordPos].length ) {
            end();
        }
        if (letterPos >= targetInput[wordPos].length + 1) {
            letterPos = 0;
            wordPos++;
            // Reset word timer so the first letter can be late
            // if (mode == 1) decoder.startWordTimer();
        }
        updateCaretPosition();
    }

    function decrementCharacter() {
        if (letterPos == 0 && wordPos == 0) return;
        letterPos--;
        if (letterPos < 0) {
            wordPos--;
            letterPos = targetInput[wordPos].length;
            // Reset word timer so the first letter can be late
            // if (rxtxMode == 1) decoder.startWordTimer();
        }
        updateCaretPosition();
    }

    // Handler for decoded letters
    const handleDecodedLetter = (letter) => {
        if (ended == true) return;
        if (freeMode) {
            appendLetter(letter);
        } else {
            if (getCurrentLetter().toUpperCase() === letter.toUpperCase()) {
                correctLetter(letter);
                incrementCharacter();
            } else {
                // Add the incorrect class if the wrong character was inputted or late class if space is missplaced
                if (letter == ' ') {
                    lateCount++;
                    targetInputObj.children[wordPos].children[letterPos].classList.add("late");
                } else {
                    incorrectCount++;
                    targetInputObj.children[wordPos].children[letterPos].classList.add("incorrect");                
                    if (!document.getElementById('strict-toggle').checked) {
                        incrementCharacter();
                    }
                }
            }
        }

        // Update the display to the last non-space input
        if (letter != " ") document.getElementById('lastInput').textContent = letter;

        // Only update timing display for actual characters, not spaces
        if (letter && letter.trim()) {
            const wpm = parseInt(document.getElementById('wpm').value);
            let idealTimings = [];
            let actualTimings = []; // To store measured timings
            const decodedPattern = morsePattern(letter); // Get .- pattern
            const idealElementTimings = getIdealTiming('', wpm); // Get ideal dit, dah, space times

            if (decodedPattern && idealElementTimings) {
                let isFirstElement = true;
                for (const element of decodedPattern) {
                    if (!isFirstElement) {
                        // Add ideal intra-character space
                        idealTimings.push({ type: 'space', duration: idealElementTimings.intraCharSpace });
                    }
                    if (element === '.') {
                        idealTimings.push({ type: 'mark', duration: idealElementTimings.dit });
                    } else if (element === '-') {
                        idealTimings.push({ type: 'mark', duration: idealElementTimings.dah });
                    }
                    isFirstElement = false;
                }
            }

            // Get actual measured timings for the bar
            actualTimings = decoder.getLastLetterTimings();

            idealTimings = getIdealTiming(letter, wpm);

            // Draw the bars *after* reconstruction
            drawTimingBar('idealTimingDisplay', idealTimings);
            drawTimingBar('actualTimingDisplay', actualTimings); // Draw measured timings
        } else {
            // Don't clear bars on space or unknown characters, let them persist
        }

        // Update the statistics display regardless of character type
        updateStatsDisplay();
    };

    const decoder = new Decoder(handleDecodedLetter);
    const keyer = new Keyer(sounder, decoder);
    const encoder = new Encoder(sounder, decoder);

    // Starts the practice run
    function start() {
        started = true;
        targetInputObj.classList.add("started");
        startTime = Date.now();
        if (rxtxMode == 0) {
            if (!document.getElementById('wait-input-toggle').checked) {
                targetInput.forEach(word => {
                   encoder.sendWord(word); 
                });
            } else {
                encoder.sendLetter(getCurrentLetter());
            }
        };
    }
    
    // ends the practice run
    function end() {
        ended = true;
        targetInputObj.classList.add("ended");
        endTime = Date.now();
        console.log("Time: " + (endTime-startTime)/1000);
        console.log("# of errors: " + incorrectCount + ", " + incorrectCount/correctCount * 100 + "%");
        console.log("# of late: " + lateCount  + ", " + lateCount/correctCount * 100 + "%");
    }


    // Load settings if available
    const savedSettings = JSON.parse(localStorage.getItem('morse-settings'));
    if (savedSettings) {
        keyer.setWpm(savedSettings.wpm);
        decoder.setFarnsworth(savedSettings.farnsworth);
        sounder.setTone(savedSettings.tone);
        encoder.setTone(savedSettings.tone);
        keyer.setMode(savedSettings.mode); // Also load mode
        document.getElementById('wpm').value = savedSettings.wpm;
        document.getElementById('farnsworth').value = savedSettings.farnsworth;
        document.getElementById('tone').value = savedSettings.tone;
        sounder.setTone(savedSettings.tone);
        document.getElementById('mode').value = savedSettings.mode; // Set dropdown value

        document.getElementById('practice-length').value = savedSettings.length;
        document.getElementById('stats-toggle').checked = savedSettings.stats;
        document.getElementById('wait-input-toggle').checked = savedSettings.waitInput;
        document.getElementById('strict-toggle').checked = savedSettings.strict;
        document.getElementById('spaces-toggle').checked = savedSettings.spaces;
        document.getElementById('replay-toggle').checked = savedSettings.replay;
        document.getElementById('wordlist-1k').checked = savedSettings.wordlistThousand;
        document.getElementById('wordlist-callsigns').checked = savedSettings.wordlistCallsigns;
        document.getElementById('wordlist-q-codes').checked = savedSettings.wordlistQCodes;
        document.getElementById('wordlist-custom').checked = savedSettings.wordlistCustom;
        document.getElementById('light').checked = savedSettings.lightTheme;
        document.getElementById('dark').checked = savedSettings.darkTheme;
        document.getElementById('neuromorphic').checked = savedSettings.neuromorphicTheme;

        custom_words = savedSettings.customWordlist;

        updateDisplays();
    } else {
        // Ensure default mode is set if no saved settings
        keyer.setMode(parseInt(document.getElementById('mode').value));
        updateDisplays(); // Update display for initial default values
    }

    function press(event) {
        if (event.code == "Enter") {
            reset();
            return;
        }
        if (ended == true) return;
        if (event.code == "Backspace") {
            decrementCharacter();
            return;
        }
        if (rxtxMode == 0) {
            if (event.key == " " && started == false) {
                start();
                return;
            }
            if (started == true && (ditdahMap[event.key.toUpperCase()] || event.key == " ")) {
                if (getCurrentLetter().toUpperCase() === event.key.toUpperCase()) {
                    correctLetter(event.key);
                    incrementCharacter();
                    if (document.getElementById('wait-input-toggle').checked) {
                        encoder.sendLetter(getCurrentLetter());
                    }
                } else {
                    incorrectCount++;
                    targetInputObj.children[wordPos].children[letterPos].classList.add("incorrect");                

                    // increment caret if the letter is not required to be correct
                    if (!document.getElementById('strict-toggle').checked ) {
                        incrementCharacter();
                        if (document.getElementById('wait-input-toggle').checked) {
                            encoder.sendLetter(getCurrentLetter());
                        }
                    } else if (document.getElementById('replay-toggle').checked) {
                        // only replay the letter if we haven't moved on
                        if (document.getElementById('wait-input-toggle').checked) {
                            encoder.sendLetter(getCurrentLetter());
                        }
                    }
                }
            }
        } else {
            if ((event.key == '[' || event.key == ']')  && started == false) {
                start();
            }
            keyer.press(event, true);
        }
        updateStatsDisplay();
    }

    // Set up keyboard input
    window.addEventListener('keydown', press);
    window.addEventListener('keyup', (e) => {keyer.press(e, false)});

    // Update displays for settings
    function updateDisplays() {
        document.getElementById('wpmValue').textContent = document.getElementById('wpm').value;
        document.getElementById('farnsworthValue').textContent = document.getElementById('farnsworth').value + 'x';
        document.getElementById('toneValue').textContent = document.getElementById('tone').value;
    }

    // Save settings when changed
    function saveSettings() {
        const settings = {
            mode: parseInt(document.getElementById('mode').value),
            wpm: parseInt(document.getElementById('wpm').value),
            farnsworth: parseInt(document.getElementById('farnsworth').value),
            tone: parseInt(document.getElementById('tone').value),
            length: parseInt(document.getElementById('practice-length').value),
            stats: document.getElementById('stats-toggle').checked,
            waitInput:document.getElementById('wait-input-toggle').checked,
            strict: document.getElementById('strict-toggle').checked,
            spaces: document.getElementById('spaces-toggle').checked,
            replay: document.getElementById('replay-toggle').checked,
            wordlistThousand: document.getElementById('wordlist-1k').checked,
            wordlistCallsigns: document.getElementById('wordlist-callsigns').checked,
            wordlistQCodes: document.getElementById('wordlist-q-codes').checked,
            wordlistCustom: document.getElementById('wordlist-custom').checked,
            lightTheme: document.getElementById('light').checked,
            darkTheme: document.getElementById('dark').checked,
            neuromorphicTheme: document.getElementById('neuromorphic').checked,
            customWordlist: custom_words,
        };
        localStorage.setItem('morse-settings', JSON.stringify(settings));
    }

    function reset() {
        // Remove focus from reset button so space doesn't reset
        document.activeElement.blur();
        
        // Clear timing display
        document.getElementById('idealTimingDisplay').innerHTML = ''; // Clear timing bars
        document.getElementById('actualTimingDisplay').innerHTML = '';
        targetInputObj.classList.remove("started");
        targetInputObj.classList.remove("ended");

        rxtxMode = document.getElementById("send-mode").checked ? 1 : 0;

        // Reset progress
        targetInput = [];
        wordPos = 0;
        letterPos = 0;
        correctCount = 0;
        correctUnitCount = 0;
        lateCount = 0;
        incorrectCount = 0;
        started = false;
        ended = false;
        startTime = 0;
        endTime = 0;
        // Remove all words from DOM
        targetInputObj.innerHTML = '';
        encoder.stopSend();

        // Regenerate target input
        generateWordlist(document.getElementById("practice-length").value);
        updateCaretPosition();
        
        // document.getElementById('calculatedWpmValue').textContent = '--'; // Clear WPM display
        decoder.clearStats();
        clearTimeout(decoder.wordTimer);
        updateStatsDisplay(); // Clear stats display
    }

    // Wire up settings controls
    document.getElementById('wpm').addEventListener('input', function() {
        keyer.setWpm(this.value);
        updateDisplays();
        saveSettings();
        updateStatsDisplay(); // Update ideal stats when WPM changes
    });

    document.getElementById('farnsworth').addEventListener('input', function() {
        const fwpm = parseInt(farnsworth.value);
        farnsworthValue.textContent = fwpm + 'x';
        decoder.setFarnsworth(fwpm);
        saveSettings();
        updateStatsDisplay(); // Update ideal stats (though Farnsworth mainly affects spaces)
    });

    document.getElementById('tone').addEventListener('input', () => {
        const newTone = parseInt(document.getElementById('tone').value);
        document.getElementById('toneValue').textContent = newTone;
        sounder.setTone(newTone);
        saveSettings();  // Save the setting
    });

    document.getElementById('mode').addEventListener('change', function() {
        keyer.setMode(parseInt(this.value));
        saveSettings();
    });

    document.getElementById('practice-length').addEventListener('change', function() {
        if (this.value < 1) {
            this.value = 1;
        }
        saveSettings();
        reset();
    });
    document.getElementById('stats-toggle').addEventListener('change', saveSettings());
    document.getElementById('wait-input-toggle').addEventListener('change', function() {
        saveSettings();
        reset();
    });
    document.getElementById('strict-toggle').addEventListener('change', saveSettings);   
    document.getElementById('spaces-toggle').addEventListener('change', saveSettings);
    document.getElementById('replay-toggle').addEventListener('change', saveSettings);    
    document.getElementById('light').addEventListener('change', saveSettings);
    document.getElementById('dark').addEventListener('change', saveSettings);
    document.getElementById('neuromorphic').addEventListener('change', saveSettings);
    document.getElementById('wordlist-1k').addEventListener('change', () => {saveSettings(); reset();});
    document.getElementById('wordlist-callsigns').addEventListener('change', () => {saveSettings(); reset();});
    document.getElementById('wordlist-q-codes').addEventListener('change', () => {saveSettings(); reset();});
    document.getElementById('wordlist-custom').addEventListener('change', () => {saveSettings(); reset();});

    document.getElementById('wordlist-custom-file').addEventListener('change', function() {
        const file = this.files[0];
        if (!file) return;
        // Read the file
        const reader = new FileReader();
        reader.onload = () => {
            custom_words = reader.result.split(/\s/).filter(Boolean);
            console.log(custom_words);
            saveSettings();
            reset();
        };
        reader.onerror = () => {
            alert("Error reading the file. Please try again.");
        };
        reader.readAsText(file);        
    });

    // Clear button functionality
    document.getElementById('clear-button').addEventListener('click', () => {
        reset();
    });

    document.getElementById('copy-mode').addEventListener("click", (e) => {
        if (e.currentTarget.checked) rxtxMode = 0;
        document.getElementById('settings-toggle').checked = false;
        reset();
    });
    
    document.getElementById('send-mode').addEventListener("click", (e) => {
        if (e.currentTarget.checked) rxtxMode = 1;
        document.getElementById('settings-toggle').checked = false;
        reset();
    });
    
    document.getElementById('settings-toggle').addEventListener("click", (e) => {
        if (!e.currentTarget.checked) updateCaretPosition();
    });

    // --- Morse Code Data & Helpers ---
    const ditdahMap = {
        'A': '12', 'B': '2111', 'C': '2121', 'D': '211', 'E': '1', 'F': '1121', 'G': '221', 'H': '1111', 'I': '11', 'J': '1222', 'K': '212', 'L': '1211', 'M': '22', 'N': '21', 'O': '222', 'P': '1221', 'Q': '2212', 'R': '121', 'S': '111', 'T': '2', 'U': '112', 'V': '1112', 'W': '122', 'X': '2112', 'Y': '2122', 'Z': '2211',
        '1': '12222', '2': '11222', '3': '11122', '4': '11112', '5': '11111', '6': '21111', '7': '22111', '8': '22211', '9': '22221', '0': '22222',
        '/': '21121', '?': '112211', '.': '121212', ',': '221122', '=': '21112',
        // Add other characters as needed
    };

    // Convert 1s and 2s pattern to dots and dashes
    function ditDahToPattern(ditDah) {
        if (!ditDah) return '';
        return ditDah.split('').map(d => d === '1' ? '.' : '-').join('');
    }

    // Get the .- pattern for a letter
    function morsePattern(letter) {
        const upperLetter = letter.toUpperCase();
        const ditDah = ditdahMap[upperLetter];
        return ditDahToPattern(ditDah);
    }

    // --- Statistics Update Function ---
    let idealDitSpan, actualDitSpan, idealDahSpan, actualDahSpan;
    let ditGraphContainer, dahGraphContainer; // Add graph containers
    let speedStat, accuracyStat, timeStat, letterStat;
    let lightTheme, darkTheme, neuromorphicTheme;
    const actualRatioValue = document.getElementById('actualRatioValue');
    const ratioIdealMarker = document.getElementById('ratio-ideal-marker');
    const ratioActualMarker = document.getElementById('ratio-actual-marker');

    // --- Stat Graph Update Function ---
    const maxMsForGraph = 400; // e.g., 400ms maps to 100px height
    function updateStatGraph(containerId, idealMs, stats) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const idealBar = container.querySelector('.ideal-bar');
        const actualRangeBar = container.querySelector('.actual-range-bar');
        const actualAvgMarker = container.querySelector('.actual-avg-marker');

        const containerHeight = container.clientHeight; // e.g., 100px
        const scale = containerHeight / maxMsForGraph;

        // Helper to calculate scaled height/position, capping at container height
        const getPixels = (ms) => Math.min(containerHeight, Math.max(0, ms * scale));

        // Update Ideal Bar
        if (idealBar && !isNaN(idealMs)) {
            idealBar.style.height = `${getPixels(idealMs)}px`;
        } else if (idealBar) {
            idealBar.style.height = `0px`;
        }

        // Update Actual Range Bar and Avg Marker
        if (actualRangeBar && actualAvgMarker && stats && !isNaN(stats.min) && !isNaN(stats.max) && !isNaN(stats.avg)) {
            const minPx = getPixels(stats.min);
            const maxPx = getPixels(stats.max);
            const avgPx = getPixels(stats.avg);

            actualRangeBar.style.bottom = `${minPx}px`;
            actualRangeBar.style.height = `${Math.max(1, maxPx - minPx)}px`; // Ensure at least 1px height
            actualAvgMarker.style.bottom = `${avgPx - 1}px`; // -1 because marker has height 2

            actualRangeBar.style.display = 'block';
            actualAvgMarker.style.display = 'block';
        } else if (actualRangeBar && actualAvgMarker) {
            // Hide if stats are invalid
            actualRangeBar.style.display = 'none';
            actualAvgMarker.style.display = 'none';
        }
    }

    function updateStatsDisplay() {

        const calculatedUnit = decoder.unit; // Use the decoder's current unit

        // Get the elements if not already fetched (could be done once outside)
        if (!idealDitSpan) idealDitSpan = document.getElementById('idealDit');
        if (!idealDahSpan) idealDahSpan = document.getElementById('idealDah');
        if (!actualDitSpan) actualDitSpan = document.getElementById('actualDit');
        if (!actualDahSpan) actualDahSpan = document.getElementById('actualDah');
        if (!ditGraphContainer) ditGraphContainer = document.getElementById('ditGraphContainer'); // Assign graph container
        if (!dahGraphContainer) dahGraphContainer = document.getElementById('dahGraphContainer'); // Assign graph container
        if (!speedStat) speedStat = document.getElementById('speedStat');
        if (!accuracyStat) accuracyStat = document.getElementById('accuracyStat');
        if (!timeStat) timeStat = document.getElementById('timeStat');
        if (!letterStat) letterStat = document.getElementById('letterStat');

        // Accuracy
        const accuracy = Math.round(correctCount / (correctCount + incorrectCount) * 100 );
        if (isNaN(accuracy)) accuracyStat.textContent = '';
        else accuracyStat.textContent = accuracy + "%";

        // WPM
        const wpm = Math.round((correctUnitCount) / (Date.now() - startTime) * 12000) / 10;
        if (correctUnitCount == 0) speedStat.textContent = '';
        else speedStat.textContent = wpm;

        // Time
        const time = Math.round((endTime - startTime)/100) / 10;
        if (endTime == 0) timeStat.textContent = '';
        else timeStat.textContent = time + 's';

        // correct incorrect late
        if (correctCount == 0 && incorrectCount == 0) letterStat.textContent = '';
        else letterStat.textContent = correctCount + '/' + incorrectCount + '/' + lateCount;
        

        // Calculate ideal timings based on decoder's unit
        const idealDit = calculatedUnit; 
        const idealDah = calculatedUnit * 3;

        // Update the ideal timing text display
        idealDitSpan.textContent = idealDit.toFixed(0);
        idealDahSpan.textContent = idealDah.toFixed(0);

        // Get Dit stats
        const ditStats = decoder.getStats('dit');
        if (ditStats && !isNaN(ditStats.avg)) {
            actualDitSpan.textContent = `${ditStats.avg} / ${ditStats.min} / ${ditStats.max}`;
        } else {
            actualDitSpan.textContent = `-- / -- / --`;
        }

        // Get Dah stats
        const dahStats = decoder.getStats('dah');
        if (dahStats && !isNaN(dahStats.avg)) {
            actualDahSpan.textContent = `${dahStats.avg} / ${dahStats.min} / ${dahStats.max}`;
        } else {
            actualDahSpan.textContent = `-- / -- / --`;
        }

        // Update the graphs
        updateStatGraph('ditGraphContainer', idealDit, ditStats);
        updateStatGraph('dahGraphContainer', idealDah, dahStats);

        // --- Calculate and Display Ratio --- //
        let actualRatio = NaN;
        let ratioText = "1 : ---";

        if (ditStats.avg > 0 && dahStats.avg > 0) {
            actualRatio = dahStats.avg / ditStats.avg;
            ratioText = `1 : ${actualRatio.toFixed(2)}`;
        } else if (dahStats.avg > 0) {
            ratioText = "1 : ∞"; // Dits are zero length?
        } // else Keep "1 : ---" if no dahs or dits

        actualRatioValue.textContent = ratioText;

        // --- Update Ratio Visual Bar --- //
        const idealRatio = 3.0;
        // Define the scale for the visual bar (e.g., ratios 1.0 to 5.0 map to 0% to 100%)
        const minRatioScale = 1.0;
        const maxRatioScale = 5.0;
        const scaleRange = maxRatioScale - minRatioScale;

        // Calculate position (0% to 100%) clamping within the scale
        const calculatePosition = (ratio) => {
            if (isNaN(ratio) || scaleRange <= 0) return 50; // Default to middle if invalid
            const clampedRatio = Math.max(minRatioScale, Math.min(maxRatioScale, ratio));
            return ((clampedRatio - minRatioScale) / scaleRange) * 100;
        };

        const idealPosition = calculatePosition(idealRatio);
        const actualPosition = calculatePosition(actualRatio);

        ratioIdealMarker.style.left = `${idealPosition}%`;
        ratioActualMarker.style.left = `${actualPosition}%`;

        // Optional: Change color based on proximity to ideal
        const tolerance = 0.35; // e.g., ratio between 2.8 and 3.2 is good
        let actualColor = '#6c757d'; // Default to grey

        if (isNaN(actualRatio)) {
            actualColor = '#6c757d'; // Grey if no data
            ratioActualMarker.style.left = '50%'; // Center if no data
        } else if (Math.abs(actualRatio - idealRatio) <= tolerance) {
            actualColor = '#28a745'; // Green for good
        } else if (Math.abs(actualRatio - idealRatio) <= tolerance * 2) {
            actualColor = '#fd7e14'; // Orange for okay
        } else {
            actualColor = '#dc3545'; // Red for far off
        }

        ratioActualMarker.style.backgroundColor = actualColor;
        actualRatioValue.style.color = actualColor; // Apply the same color to the text
    }

    // --- Morse Timing Calculations (Ideal) ---
    // Calculates ideal timing elements based on WPM
    // Returns an array of { type: 'mark'/'space', duration: ms } if letter is provided
    // Returns an object { dit, dah, intraCharSpace, interCharSpace, wordSpace } if letter is empty
    function getIdealTiming(letter, wpm) {
        const upperLetter = letter ? letter.toUpperCase() : '';

        if (letter === ' ') {
            // For a space character, we might return just the word space duration
            // Or handle it differently depending on desired behavior. For now, empty.
            return [];
        }
        if (upperLetter && !ditdahMap[upperLetter]) {
            return []; // No timing for unknown chars
        }

        const ditDuration = 1200 / wpm; // Formula: T_dit = (60 * 1000) / (50 * wpm)
        const dahDuration = ditDuration * 3;
        const intraCharSpace = ditDuration; // Gap between dits/dahs in a letter
        const interCharSpace = ditDuration * 3;
        const wordSpace = ditDuration * 7; // Standard word space

        // If no letter provided, return the base timings object
        if (!upperLetter) {
            return { dit: ditDuration, dah: dahDuration, intraCharSpace, interCharSpace, wordSpace };
        }

        // If a letter is provided, calculate the specific timing array
        const patternString = ditdahMap[upperLetter];

        // If patternString is invalid (letter not in map), return empty array early
        if (!patternString) return [];

        let timings = [];
        let isFirstElement = true;
        for (const element of patternString) {
            if (!isFirstElement) {
                // Add intra-character space
                timings.push({ type: 'space', duration: intraCharSpace });
            }
            if (element === '1') {
                timings.push({ type: 'mark', duration: ditDuration });
            } else if (element === '2') {
                timings.push({ type: 'mark', duration: dahDuration });
            }
            isFirstElement = false;
        }
        return timings;
    }

    // Renders a timing bar (ideal or actual) into the specified element
    function drawTimingBar(elementId, timings) {
        const container = document.getElementById(elementId);
        container.innerHTML = ''; // Clear previous bar

        // Calculate total duration for this specific timing array
        const ownTotalDuration = (timings && timings.length > 0) ? timings.reduce((sum, t) => sum + t.duration, 0) : 0;

        if (!timings || timings.length === 0 || ownTotalDuration <= 0) {
            return; // Nothing to draw
        }

        // Add a small minimum duration to prevent zero-width elements if totalDuration is very small
        const minElementDuration = 1; // Smallest duration to consider for scaling
        const effectiveTotalDuration = Math.max(ownTotalDuration, minElementDuration * timings.length);

        timings.forEach(timing => {
            const element = document.createElement('div');
            element.classList.add('timing-element');
            const isMark = timing.type === 'mark';
            element.classList.add(isMark ? 'timing-key-down' : 'timing-key-up');

            // Calculate width percentage, ensuring a minimum visible width if duration is tiny but non-zero
            const duration = Math.max(timing.duration, 0); // Ensure duration is not negative
            const percentage = (duration / effectiveTotalDuration) * 100;
            element.style.width = `${percentage}%`;
            // Add a minimum width in pixels for very short elements to remain visible
            if (percentage > 0 && percentage < 0.5) {
                 element.style.minWidth = '1px';
            }

            container.appendChild(element);
        });
    }

    // Generates a random callsign
    function generateCallsign() {
        let validFirstLetters = "NWK";
        const validLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let callsign = '';
        const numLetters1 = Math.floor(Math.random() * 2); // Random form 0-1. The first letter is already counted
        let numLetters2 = 0;
        if (numLetters1 == 0) {
            numLetters2 = Math.floor(Math.random() * 2) + 2; // Random from 2-3
        } else {
            numLetters2 = Math.floor(Math.random() * 3) + 1; // Random from 1-3
        }
        if (numLetters1 == 1 && numLetters2 == 2) { // The 'A' prefix is only given on 2x2 callsigns
            validFirstLetters += "A";
        }
        callsign += validFirstLetters.charAt(Math.floor(Math.random() * (3 + (numLetters1 > 0 && numLetters2 == 2 ? 1 : 0))));
        for (let i = 0; i < numLetters1; i++) {
            callsign += validLetters.charAt(Math.floor(Math.random() * 26));
        }
        callsign += Math.floor(Math.random() * 10); // Random from 0-9
        for (let i = 0; i < numLetters2; i++) {
            callsign += validLetters.charAt(Math.floor(Math.random() * 26));
        }

        // Exclude Q-codes from callsigns
        if (numLetters2 == 3) {
            q_codes.forEach(q_code => {
                if (callsign.includes(q_code)) {
                    return generateCallsign();
                }
            });
        }
        return callsign;
    }


    window.onresize = function () {
        updateCaretPosition();
    }

    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        mobile = true;
        const mobileInput = document.getElementById('mobileInput');
        mobileInput.addEventListener('textInput', (event) => {
            var newEvent = new KeyboardEvent('keydown', {key: event.data})
            press(newEvent);
        });
        window.removeEventListener('keydown', press);
        
        targetInputObj.addEventListener('click', function() {
            mobileInput.focus(); 
        });
    //     document.querySelector('.mobile-buttons').classList.remove('hidden');
    //     document.getElementById('ditButton').addEventListener("mousedown", () => {
    //         if (ended == true) return;
    //         if (started == false) start();
    //         var event = new KeyboardEvent('keydown', {code: "ditKey"})
    //         // event.code = 'ditKey';
    //         keyer.press(event, true);
    //         updateStatsDisplay();
    //         console.log("down");
    //     });
    //     document.getElementById('ditButton').addEventListener("mouseup", () => {
    //         var event = new KeyboardEvent('keyup', {code: "ditKey"})
    //         keyer.press(event, false);
    //         console.log("up");
    //     });
    
    }

    // Initial display update (call after displays are updated initially)
    updateDisplays();
    reset();
}