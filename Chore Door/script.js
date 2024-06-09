// Access HTML elements

let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');

// Accessing start button

let startButton = document.getElementsByClassName('button');

// Initialising doors

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
let numClosedDoors = 3;

//Checking if door is closed

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return true;
    } else {
        return false;
    }
}
 // Cheking if door is Chore Door

 const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
 }

// Writing Play and Game Over Logic

const gameOver = (status) => {
    if (status === 'win') {
        startButton[0].innerHTML = 'You win! Play again?';
    } else {
        startButton[0].innerHTML = 'Game over! Play again?';

    }
    currentlyPlaying = false;
}

//Check game progress

 const playDoor = (door) => {
    //variable vill decrease by one every time a door is opened
    numClosedDoors --
    if (numClosedDoors === 0) {
        return gameOver('win');
    }
    /*Check if calling the isBot() function with the argument of door returns 
    true. */
   
    if (isBot(door) === true) {
        return gameOver();
    }
 }

 //Choosing a Random Chore Door

 const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor1 = beachDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = spaceDoorPath;
    } else {
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath;
    }
 }

 //

 doorImage1.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage1)) {
      doorImage1.src = openDoor1;
      playDoor(doorImage1);
    }
  }
  
  doorImage2.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage2)) {
      doorImage2.src = openDoor2;
      playDoor(doorImage2);
    }
  }
  
  doorImage3.onclick = () => {
    if (currentlyPlaying && isClicked(doorImage3)) {
      doorImage3.src = openDoor3;
      playDoor(doorImage3);
    }
  }
  
  startButton.onclick = () => {
    if (currentlyPlaying === false) {
      startRound();
    }
  }

 //Starting the Game. All doors are closed at the start of the game

 const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
 } 

 numClosedDoors = 3;
 currentlyPlaying = true;
 document.getElementsByClassName('button').innerHTML = 'Good Luck!';
 randomChoreDoorGenerator();
 startRound();