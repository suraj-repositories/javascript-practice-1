// class =  A blueprint for creating Objects
//         define what properties and methods they have 
//         use a constructor for unique properties

class Players{
    score = 0;
    pause(){
        console.log("you paused the game");
    }
    exit(){
        console.log("you exited the game");
    }
}

const player1 = new Players();          // you can create any number of objects
const player2 = new Players();

player1.score += 1;
console.log(player1.score);
player1.pause();
player1.exit();

player2.score += 5;
console.log(player2.score);
player2.pause();
player2.exit();

