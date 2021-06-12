/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

document.querySelector("#btn__reset").addEventListener("click", function()
{
 game.startGame();
});


document.getElementById('qwerty').addEventListener('click',(event)=>{
    console.log(event.target);
    if (event.target.className==='key'){
        game.handleInteraction(event.target);
    }
});

// game.startGame();