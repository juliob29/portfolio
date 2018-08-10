console.log("Code running");

let turn = document.querySelector("#turn")
let boardsquare = document.querySelectorAll(".boardsquare")
var playerturn = true
var clicked = []
var player1noise = new Audio('Player1.wav')
var player2noise = new Audio('Player2.wav')

var arrayX = []
var arrayO = []
var game = "not over"
let count = 0;

function logicFunction(e) {

    let classList = this.className.split(" ")
    if (classList.includes('played')) {
        console.log("PLAYED");
        
    } else if (playerturn == true) {
        this.classList.add('played')
        this.innerHTML = "<h1>X</h1>"
        turn.innerHTML = "Player O Turn"
        let datanumber = Number(this.dataset.key)
        arrayX.push(datanumber)
        player1noise.play()
        playerturn = !playerturn
        count++
        
    } else if (playerturn == false) {
        this.classList.add('played')
        this.innerHTML = "<h1>O</h1>"
        turn.innerHTML = "Player X Turn"
        let datanumber = Number(this.dataset.key)
        arrayO.push(datanumber)
        player2noise.play()
        playerturn = !playerturn
        count++
    }
    checkWinX()
    checkWinO()
    Win()

};
boardsquare.forEach(boardsquare => boardsquare.addEventListener("click", logicFunction))

function checkWinX() {
    if ((arrayX.includes(0) && arrayX.includes(1) && arrayX.includes(2)) || arrayX.includes(3) && arrayX.includes(4) && arrayX.includes(5) || arrayX.includes(6) && arrayX.includes(7) && arrayX.includes(8) || arrayX.includes(0) && arrayX.includes(3) && arrayX.includes(6) || arrayX.includes(1) && arrayX.includes(4) && arrayX.includes(7) || arrayX.includes(2) && arrayX.includes(5) && arrayX.includes(8) || arrayX.includes(0) && arrayX.includes(4) && arrayX.includes(8) || arrayX.includes(6) && arrayX.includes(4) && arrayX.includes(2)) {
        game = "X"
        return true
    } else {
        console.log("GAME NOT OVER")
        return false
    }
}
function checkWinO() {
    if ((arrayO.includes(0) && arrayO.includes(1) && arrayO.includes(2)) || arrayO.includes(3) && arrayO.includes(4) && arrayO.includes(5) || arrayO.includes(6) && arrayO.includes(7) && arrayO.includes(8) || arrayO.includes(0) && arrayO.includes(3) && arrayO.includes(6) || arrayO.includes(1) && arrayO.includes(4) && arrayO.includes(7) || arrayO.includes(2) && arrayO.includes(5) && arrayO.includes(8) || arrayO.includes(0) && arrayO.includes(4) && arrayO.includes(8) || arrayO.includes(6) && arrayO.includes(4) && arrayO.includes(2)) {
        game = "O"
        return true
    } else {
        console.log("GAME NOT OVER")
        return false
    }

}
function Win() {
    if (game == "O") {
        console.log("O WINS")
        turn.innerHTML = "O Wins!"
        for (var j = 0; j < 9; j++) {
            boardsquare[j].classList.add('played')
        }
    } else if (game == "X") {
        console.log("X WINS")
        turn.innerHTML = "X Wins!"
        for (var j = 0; j < 9; j++) {
            boardsquare[j].classList.add('played')
        }
    } else if (count == 9) {
        console.log("Tie!")
        turn.innerHTML = "It's a Tie!"
    }
}
