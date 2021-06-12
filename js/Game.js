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
    createPhrases()
    {
        return [ new Phrase("This is a game"), new Phrase("TeamTreeHouse JS exam"), new Phrase("We will make it"), new Phrase("This is a test app"), new Phrase("Game show app")]
    };

    getRandomPhrase() {
        const getRandomNubmerWithinRange = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[getRandomNubmerWithinRange];
    };

    startGame(){
        document.querySelector("#overlay").style.display = "none";
        this.getRandomPhrase();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addhPraseToDisplay();
    };

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
    checkForWin(){
  // checking if <li> elements have a class 'hide letter'
        if (document.querySelectorAll("#phrase li.hide").length !== 0) {
            return false;
        } 
        else {
            return true;
        }
    }
    removeLife() {
        let lifeImages = Array.from(document.querySelectorAll('img')).reverse();
        lifeImages[this.missed].src="images/lostHeart.png"
        this.missed += 1;
        if (this.missed === 5 ){
            this.gameOver(false);
        }
    }
    gameOver(victory){
        let overlay = document.querySelector("#overlay");
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