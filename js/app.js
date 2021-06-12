/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

document.querySelector("#btn__reset").addEventListener("click", function()
{
 game.startGame();
});


document.querySelector("#qwerty").addEventListener('click',(event)=>{
    if (event.target.className==="key"){
    console.log(event.target);
        if (event.target.className==="key"){
            game.handleInteraction(event.target);
        }
    }
});

document.addEventListener('keydown', x => {
    document.querySelectorAll("#qwerty .keyrow .key").forEach( a => {
        if(a.textContent === x.key)
        {
            game.handleInteraction(a);
        }
        });
});