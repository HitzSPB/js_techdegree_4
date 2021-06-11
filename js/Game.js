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
        return [ new Phrase("This is a game"),new Phrase("TeamTreeHouse JS exam"), new Phrase("We will make it"), new Phrase("This is a test app"),new Phrase("Game show app")]
        // return [ {phrase:"This is a game"},{phrase:"TeamTreeHouse JS exam"}, {phrase:"We will make it"}, {phrase:"This is a test app"},{phrase:"Game show app"}]
    }
    getRandomPhrase() {
        const getRandomNubmerWithinRange = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[getRandomNubmerWithinRange];
    };
    startGame(){
        document.querySelector("#overlay").remove();
        this.createPhrases();
        this.getRandomPhrase();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addhPraseToDisplay();
    };
    handleInteraction() {

    }
  }