/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

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
    checkLetter(character){
        if (this.phrase.includes(character)) {
            return true;
        } else {
            return false;
        }

    }
    showMatchedLetter(character){
        document.querySelectorAll('#phrase li').forEach(x => {
            if(x.textContent.toLocaleLowerCase() === character)
            {
                x.classList.add("show");
            }
        });
    }
  }