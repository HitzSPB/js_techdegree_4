/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor()
    {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    // Contains the array of phrases
    createPhrases()
    {
        return [ new Phrase("This is a game"), new Phrase("TeamTreeHouse JS exam"), new Phrase("We will make it"), new Phrase("This is a test app"), new Phrase("Game show app")]
    };

    // Calculates the length of the array and finds the min and max values to select a random array. The value will never reach the actual count of the array as we use the floor method to always take the lower number what is perfect as array starts with index 0
    getRandomPhrase() {
        const getRandomNubmerWithinRange = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[getRandomNubmerWithinRange];
    };

    // Starts the game by removing overlay, and add one of the phrases to the display
    startGame(){
        document.querySelector("#overlay").style.display = "none";
        this.getRandomPhrase();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addhPraseToDisplay();
    };

    // Handle all the events when a keyboard or on-screen key is pressed
    handleInteraction(character) {
        character.disabled = true;
        if(this.activePhrase.checkLetter(character.textContent)){
            character.classList.add("chosen");
            this.activePhrase.showMatchedLetter(character.textContent);
            if(this.checkForWin()){
                this.gameOver(true);
            }
        }
        else {
            character.classList.add("wrong");
            this.removeLife();

        }
    }

    // Checks if li.show elements equal the length of the active phrase without space to return if wincondition have been met
    checkForWin(){
  // checking if <li> elements have a class 'hide letter'
        if (document.querySelectorAll("#phrase li.show").length === game.activePhrase.phrase.replace(/\s/g, "").length) {
            return true;
        } 
        else {
            return false;
        }
    }

    // Changes the heart image and adds 1 to missed count
    removeLife() {
        let lifeImages = Array.from(document.querySelectorAll('img')).reverse();
        lifeImages[this.missed].src="images/lostHeart.png"
        this.missed += 1;
        if (this.missed === 5 ){
            this.gameOver(false);
        }
    }

    // Displays a message depending if is a win or loss
    gameOver(victory){
        let overlay = document.querySelector("#overlay");
        overlay.className = ""; // Clear in case this is not the first game. Otherwise it will stay the lost color after loosing first time.
        let gameMessage = document.querySelector("#game-over-message");
        overlay.style.display = "";
        if (victory) {
            overlay.classList.add("win");   
            gameMessage.textContent = "Eyyy you won the game";
        } else {
            overlay.className = "lose";
            gameMessage.textContent = "Not everyone is a winner";
        }
        this.resetGame();
    }

    // Resets the game values to default to play the game again
    resetGame(){
        this.missed = 0;
        document.querySelector("#phrase ul").innerHTML = "";
        document.querySelectorAll("img").forEach(x => x.src = "images/liveHeart.png")
        document.querySelectorAll("#qwerty button").forEach(x => {
                x.disabled = false;
                x.className = "key";
            }
        );
    };
  }