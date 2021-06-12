/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

// Listens on the event button click on the overlay screen. Once the event have been triggered it starts the game 
document.querySelector("#btn__reset").addEventListener("click", function()
{
    game = new Game();
    game.startGame();
});

// Adds a event listener to the entire onscreen keyboard but only calls the handleInteraction upon click on a element with classname key
document.querySelector("#qwerty").addEventListener('click',(event)=>{
    if (event.target.className==="key"){
    console.log(event.target);
        if (event.target.className==="key"){
            game.handleInteraction(event.target);
        }
    }
});

// Captures key press input from keyboard
document.addEventListener('keydown', x => {
    document.querySelectorAll("#qwerty .keyrow .key").forEach( a => {
        if(a.textContent === x.key)
        {
            game.handleInteraction(a);
        }
        });
});