/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    addhPraseToDisplay(){
        for (let i = 0; i < this.phrase.length; i++) {

            if (this.phrase[i] !== ' ') {
                const liElement = document.createElement('li');
                liElement.setAttribute('class', `hide letter ${this.phrase[i]}`);
                // liElement.classList.add("`hide letter ${this.phrase[i]}`");
                liElement.textContent = `${this.phrase[i]}`;
                document.querySelector("ul").appendChild(liElement);

            } else {
                const elementLi = document.createElement('li');
                elementLi.setAttribute('class', 'hide space');
                elementLi.textContent = ' ';
                document.querySelector("ul").appendChild(elementLi);
            }
        }

//         <div id="phrase" class="section">
//     <ul>
//         <li class="hide letter h">h</li>
//         <li class="hide letter o">o</li>
//         <li class="hide letter w">w</li>
//         <li class="space"> </li>
//         <li class="hide letter a">a</li>
//         <li class="hide letter r">r</li>
//         <li class="hide letter e">e</li>
//         <li class="space"> </li>
//         <li class="hide letter y">y</li>
//         <li class="hide letter o">o</li>
//         <li class="hide letter u">u</li>
//     </ul>
// </div>
    }

  }