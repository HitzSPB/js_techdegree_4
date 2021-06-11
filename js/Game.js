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
        return [ {phrase:"This is a game"},{phrase:"TeamTreeHouse JS exam"}, {phrase:"We will make it"}, {phrase:"This is a test app"},{phrase:"Game show app"}]
    }
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    };
  }