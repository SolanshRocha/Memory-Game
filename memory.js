function bonjour(id) {
    var test = document.getElementById(id).childNodes[1];
    var test1 = document.getElementById(id).childNodes[3];
       test.style.display = "inline";
        test1.style.display = "none"; 
} 


// cards array holds all cards 
let card = document.getElementsByClassName("memory-card");
let cards = [...card]

//deck of all cards in game 
const deck = document.getElementById("card-deck");

//declaring move variable
let move = 0;
let counter = document.querySelector(".moves");


//declare also variables for star icons
const stars = document.querySelectorAll(".fa-star");

//declare variable of matching cards 
let matchedCard = document.getElementsByClassName("match");

//stars list
let starsList = document.querySelectorAll(".stars li");

//close Icon in modal 
let closeicon = document.querySelector(".close");

//declare modal
let modal = document.getElementById("popup1");


// array for open cards
var openCards = [];




// Fisher - Yater (aka knuth) shuffle 
// the cards are about to be shuffle, there's no game of they aren't suffle, in this project to shuffle an array was already provided from here. 
 // And this is Known as Fisher-Yates(aka knuth) Shuffle, Then afterwards we should be able to shuffle them 

 // const deck = document.querySelector("memory-card");

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

 // document.body.onload = startGame(); 


// function to start a new game 

function startGame() {
    cards= shuffle(cards);
    //remove all existing classes from each card 
    for(var i = 0; i < cards.length; i++) {
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }



// reset moves
moves = 0
counter.innerHTML = moves;
 
// reset rating
for (var i=0; i <stars.length; i++){
    stars[i].style.color = "#FFD700";
    stars[i].style.visibility = "visible";
}

// reset timer 
second = 0;
minute = 0;
hour = 0;
var timer = document.querySelector(".timer");
timer.innerHTML = "O mins O sec";
clearInterval(interval);

// toggles open and show class to display cards

var displayCard = function (){
    this.classList.toggle("open");
    this.classList;toggle("show");
    this.classList;toggle("disabled");
}

// simply saying once this window (page) is loaded, run the startGame function.
//add opened cards to openCards list and check if cards are match or not 

function cardOpen() {
    openedCards.push(this);
    var len = openedCards.length;
    if(len === 2){
        moveCounter();
        if(openCards[0].type === openCards[1].type){
            matchMedia();
        } else {
            unmatched();
        }
    }
};


//for when cards match 

function matched(){
    openedCards[0].classList.add("match", "disabled");
    openedCards[1].classList.add("match", "disabled");
    openedCards[0].classList.remove("show","open");
    openedCards[1].classList.remove("show","open");
    openedCards = [];
}


//for when cards don't match 
function unmatched(){
    openedCards[0].classList.add("unmatched");
    openedCards[1].classList.add("unmatched");
    disable();
    setTimeout(function(){
        openedCards[0].classList.remove("show", "open", "unmatched");
        openedCards[1].classList.remove("show", "open", "unmatched");
        enable();
        openedCards = [];
    },1100);
}

// disable cards temporarily
function disable(){
    array.prototype.filter.call(cards, function(card){
        card.classList.add('disabled');
    });
}

//enable cards and disable matched cards 
function enable(){
    array.prototype.filter.call(cards, function(card){
        card.classList.remove('disabled');
        for(var i = 0; i < matchedCard.length; i++){
            matchedCard[i].classList.add("disabled");
        }
    });
}

// Game should display the current number of moves a user had made.

function moveCounter(){
    moves++;
    moveCounter.innerHTML = moves;
}

//start timer based on first click
if(moves == 1) { 
second = 0;
minute = 0;
hour = 0;
startTimer();
}

// the game should display a star rating(from 1-3) that reflects the player's performance  based on number of moves
// setting rates based on moves.

if (move > 8 && move < 12){
    for(i = 0; i < 3; i++){
        if(i > 1){
            stars[i].style.visibility = "collapse";
        }
    }
}

else if (move > 13){
    for(i= 0; i < 3; i++){
        if(i > 0){
            stars[i].style.visibility = "collapse";
        }
    }
}

//game timer
var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer() {
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins"+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

// Congrats qhen all the cards MATCH and showe moves time and also rating.
function congratulations(){
    if(matchedCard.length == 12) {
        clearInterval(interval);
        finalTime = timer.innerHTML;

// show congrats modal
modal.classList.add("show");

//declare star rating variable 
var starRating = document.querySelector(".stars").innerHTML;

//showing move rating, time modal 
document.getElementById("finalMove").innerHTML = moves;
document.getElementById("startRating").innerHTML = starRating;
document.getElementById("totalTime").innerHTML = finalTime;

//closemodal on modal
closeModal();
    }
}

//closemodal on modal
closeModal();


// close icon modal
function closeModal(){
    closeicon.addEventListener("click", function(e) {
        modal.classList.remove("show");
        startGame();
    });
}



// for user to play again 
function playAgain(){
    modal.classList.remove("show");
    startGame();
}


//loop to add event listeners to each card 

for(var i = 0; i < cards.length; i++){
    card = cards[i];
    card[i].addEventListener("click", displayCard);
    card.addEventListener("click", cardOpen);
    card.addEventListener("click", congratulations);
    
};
}

















// deck of all cards in game 


/* function startGame(){
    var shuffledCards = shuffle(cards);
    for (var i= 0; i < shuffledCards.length; i++){
        [].forEach.call(shuffleCards, function(item){
            deck.appendChild(item);
        });
    }
} */
















































