// Card section of game
// Variables of the startGame() function
let player = { // Object with player info
    name: "Josh",
    chips: 154,
}

let cards = [] // Array for cards
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// Rendering playerEl
playerEl.textContent = player.name + ": $" + player.chips

// Random card generator
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1 // 0 -13
    if (randomCard < 2) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }
}

// Start of game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// Middle section of game to check winnig condition
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You got Blackjack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game. Better luck next time"
        isAlive = false;
    }
    messageEl.textContent = message
}

// New cards section of game
// Variables of the newCard() function
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}