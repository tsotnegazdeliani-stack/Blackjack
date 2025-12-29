//let gameStarted = false
let cards = []
let sum = 0
let hasBlackJack = false;
let isAlive = false;
let nameEntered = false
let message = "";
let messageEl = document.querySelector(".message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");
let playerInput = document.getElementById ("player-input")

let player = {
    name: "Player",
    chips: 0
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function applyName() {
    isAlive = false
    nameEntered = true
    player.chips = 700
    player.name = playerInput.value
    playerEl.textContent = player.name + ": $" + player.chips

}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13 ) + 1
    if (randomCard === 1) {
        return 11
    }
    else if (randomCard > 10) {
        return 10
    }
    else {

    return randomCard 
    }
}

function startGame() {
    if (nameEntered === true){

    hasBlackJack = false;
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    }
} 
 function renderGame(){
    cardsEl.textContent = "Cards: " 

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
    message = "Do you want to draw a new card?";

    } else if (sum === 21) {
    message = "You've got Blackjack";
    hasBlackJack = true;
    player.chips += 100
    playerEl.textContent = player.name + ": $" + player.chips
    } else {
    message = "You're out of the game!";
    isAlive = false;
    player.chips -= 100
    } 

    messageEl.textContent = message;
    
 }

function newCard() {
    if (isAlive === true && /*gameStarted === true &&*/ hasBlackJack === false){
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
    }
    if (hasBlackJack === true) {
        player.chips += 100
        playerEl.textContent = player.name + ": $" + player.chips
    }
    else if (isAlive === false) {
        playerEl.textContent = player.name + ": $" + player.chips

    }
    
}

function restart(){
    isAlive = false
    hasBlackJack = false
    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "

}


