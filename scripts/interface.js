let resetBtn = document.querySelector("button");

document.addEventListener("DOMContentLoaded", () => {

    let squares = document.querySelectorAll(".piece")

    squares.forEach(square => {
        square.addEventListener("click", handleClick);
    })

})

resetBtn.addEventListener("click",updateSquares)

function handleClick(event){
    
    let square = event.target;
    let position = square.id;
    for(let i = 0; i < board.length ; i++){ 
    }
    if (handleMove(position)){
        setTimeout(() => {alert("O jogo acabou - O vencedor é o jogador " + symbols[playertime] + " - A sequência vitoriosa é " + isWin().position); updateSquares()}, 10);
    }
    else if(board.every(isDefined) && !isWin()){
        setTimeout (() =>{alert("O jogo terminou em empate"); updateSquares()}, 10)
    }
    updateSquare(position)
    
}
function updateSquare(position) {

    let square = document.getElementById(position.toString())
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`

}
function updateSquares() {

    let squares = document.querySelectorAll(".piece");
    squares.forEach(square => {
      square.innerHTML = ""
    })
    resetGame()

}
function isDefined(element){
    return element !== ''
}

    