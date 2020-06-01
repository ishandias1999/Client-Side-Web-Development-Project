const menuButton = document.querySelector(".menuButton");
var bool = false; // bool is set to false

// having an event listner for the link
menuButton.addEventListener('click',openMenu);
// this function is for opening and closing the menu
function openMenu(){
  if(bool == false ){ // if bool is false then the menu will open
    document.getElementById("menu").style.left = "0px";
    bool = true; // bool is set to true

  }
  else { // else the menu will close (so bring the menu back -127px to the left)
    document.getElementById("menu").style.left = "-127px";
    bool = false; // bool is set to false


  }

}



// Once you click on the games link located at the side of the games menu
// the colour of the games link will change to a light green and then back to
// the default colour after a few seconds
const colourBtn = document.querySelector(".menuButton")
colourBtn.addEventListener('click', setColour);

function setColour(){
  document.querySelector(".menuButton").style.background = "#0c9463";
  setTimeout("setToDefault()", 500);

}

function setToDefault(){
  document.querySelector(".menuButton").style.background= "white";
}






// Game 2 - opening the overlay
const game2btn = document.querySelector(".game2btn");
// event listener
game2btn.addEventListener('click',onOverlay);

function onOverlay(){ // once the button is clicked the overlay opens
  document.getElementById("secondGame").style.display = "flex";
}

// Game 2 - closing the overlay
const cgame = document.querySelector(".closeGame");
// event listner
cgame.addEventListener('click',closeOverlay);

function closeOverlay(){ // once the close button is clicked the overlay is closed
  document.getElementById("secondGame").style.display = "none";
}





//Game 1 opening the game.
const game1btn = document.querySelector(".game1btn");

game1btn.addEventListener('click',openGame);

// The openGame() function will place a random card in the machine image src
// this will be displayed in the overlay where the user will be able to see
// the randomly chosen machine card.
function openGame(){
  randNum = Math.floor(Math.random() * 52);
  getCard2 = deck[randNum];
  document.getElementById("machine").src = "cards/cards/" + getCard2["picture"];
  document.querySelector(".overlay").style.display = "flex";

}





// closing the game.
const closeBtn = document.getElementById("close_overlay");

closeBtn.addEventListener('click',closeGame);
// the closeGame() function closes the main overlay where the user plays the game at
// the close button also closes the result overlay (resOverlay)
function closeGame(){
  document.querySelector(".overlay").style.display = "none";
  document.getElementById("resOverlay").style.display = "none";
}




// giving a user another chance to play the game.
const tryAgainBtn = document.getElementById("tryAgain");

// adding an addEventListener to the tryAgain button
tryAgainBtn.addEventListener('click',tryGameAgain);

// the tryGameAgain function basically allows a user to play the game again.
// firsly when the user clicks on the tryAgain button the result Overlay will close.
// then the user will be able to see that the machine card on the left has changed randomly.
// I have the openGame() function inside this function so a machine card will be generated randomly.
function tryGameAgain(){
  document.getElementById('resOverlay').style.display = "none";
  openGame();
  document.getElementById("player").src = "cards/cards/back.png";

}





// deck of card
var deck  = [
			{picture: "AceHearts.png", facevalue: 1 },

			{picture: "2Hearts.png", facevalue: 2 },

			{picture: "3Hearts.png", facevalue: 3 },

			{picture: "4Hearts.png", facevalue: 4 },

			{picture: "5Hearts.png", facevalue: 5 },

			{picture: "6Hearts.png", facevalue: 6 },

			{picture: "7Hearts.png", facevalue: 7 },

			{picture: "8Hearts.png", facevalue: 8 },

			{picture: "9Hearts.png", facevalue: 9 },

			{picture: "10Hearts.png", facevalue: 10 },

			{picture: "JackHearts.png", facevalue: 11 },

			{picture: "QueenHearts.png", facevalue: 12 },

			{picture: "KingHearts.png", facevalue: 13 },

			{picture: "AceClubs.png", facevalue: 1 },

			{picture: "2Clubs.png", facevalue: 2 },

			{picture: "3Clubs.png", facevalue: 3 },

			{picture: "4Clubs.png", facevalue: 4 },

			{picture: "5Clubs.png", facevalue: 5 },

			{picture: "6Clubs.png", facevalue: 6 },

			{picture: "7Clubs.png", facevalue: 7 },

			{picture: "8Clubs.png", facevalue: 8 },

			{picture: "9Clubs.png", facevalue: 9 },

			{picture: "10Clubs.png", facevalue: 10 },

			{picture: "JackClubs.png", facevalue: 11},

			{picture: "QueenClubs.png", facevalue: 12 },

			{picture: "KingClubs.png", facevalue: 13 },

						{picture: "AceSpades.png", facevalue: 1 },

			{picture: "2Spades.png", facevalue: 2 },

			{picture: "3Spades.png", facevalue: 3 },

			{picture: "4Spades.png", facevalue: 4 },

			{picture: "5Spades.png", facevalue: 5 },

			{picture: "6Spades.png", facevalue: 6 },

			{picture: "7Spades.png", facevalue: 7 },

			{picture: "8Spades.png", facevalue: 8 },

			{picture: "9Spades.png", facevalue: 9 },

			{picture: "10Spades.png", facevalue: 10 },

			{picture: "JackSpades.png", facevalue: 11 },

			{picture: "QueenSpades.png", facevalue: 12 },

			{picture: "KingSpades.png", facevalue: 13 },

			{picture: "AceDiamonds.png", facevalue: 1 },

			{picture: "2Diamonds.png", facevalue: 2 },

			{picture: "3Diamonds.png", facevalue: 3 },

			{picture: "4Diamonds.png", facevalue: 4 },

			{picture: "5Diamonds.png", facevalue: 5 },

			{picture: "6Diamonds.png", facevalue: 6 },

			{picture: "7Diamonds.png", facevalue: 7 },

			{picture: "8Diamonds.png", facevalue: 8 },

			{picture: "9Diamonds.png", facevalue: 9 },

			{picture: "10Diamonds.png", facevalue: 10 },

			{picture: "JackDiamonds.png", facevalue: 11 },

			{picture: "QueenDiamonds.png", facevalue: 12 },

			{picture: "KingDiamonds.png", facevalue: 13 }




			];



      //  the drawCardBtn button.
      const dcardbtn = document.querySelector(".drawCardBtn");
      // adding an addEventListener to the drawCardBtn button.
      dcardbtn.addEventListener('click', game);

      // once the drawCardBtn button is clicked this function will generate a player card randomly
      // and I have the displayResOverlay on a timeer so the result will be displayed in 2 seconds
      // in the result overlay.
      function game(){
        // creating a random number
        randNum = Math.floor(Math.random() * 52);
        // gecard holds the deck's dictionatires
        getCard = deck[randNum];
        // here i'm displaying
        document.getElementById('player').src = "cards/cards/" + getCard["picture"];
        setTimeout("displayResOverlay()", 2000);

      }



      // this function bascially sees if the facevalue of the machine card and players card is the same
      // and is the 2 values are the same the user wins.
      // else the user looses.
      // wether they win or loose their result of thier outcome from the game will be displayed in the
      // result overlay.
      function displayResOverlay(){
        if (getCard["facevalue"] == getCard2["facevalue"]){
          //console.log("you won");
          document.getElementById('resOverlay').style.display = "flex";
          document.getElementById("result").innerHTML = "You Won";

        }
        else{
          //console.log("you lost");
          document.getElementById('resOverlay').style.display = "flex";
          document.getElementById("result").innerHTML = "You Lost";
        }

      }
