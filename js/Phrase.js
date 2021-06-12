/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    // Adds the phrase into list items to display them on the screen
    addhPraseToDisplay(){
        for (let i = 0; i < this.phrase.length; i++) {
            const liElement = document.createElement('li');
            liElement.classList.add("hide"); 

            if (this.phrase[i] !== ' ') {
                liElement.classList.add("letter");
                liElement.classList.add(`${this.phrase[i]}`);
                liElement.textContent = this.phrase[i];

            } else {
                liElement.classList.add("space");
                liElement.textContent = ' ';
            }

            document.querySelector("#phrase ul").appendChild(liElement);
        }
    }

    // Checks if the phrase contains the selected character
    checkLetter(character){
        if (this.phrase.toLocaleLowerCase().includes(character)) {
            return true;
        } else {
            return false;
        }

    }
    
    // Reveals all the characters in the phrase that equals the chosen one.
    showMatchedLetter(character){
        document.querySelectorAll('#phrase li').forEach(x => {
            if(x.textContent.toLocaleLowerCase() === character)
            {
                x.classList.add("show");
            }
        });
    }
  }