// Change X to O and vice-versa
var turn = "X"

function playerSymbol(){
  if(turn=="X"){
    turn="O";
  }else if (turn=="O"){
    turn="X";
  }
  return turn;
}

// Play
var cellVars = document.querySelectorAll("td");

for (var i = 0; i < cellVars.length; i++) {

  cellVars[i].addEventListener("click",function(){
    var turn = playerSymbol();
    this.textContent=turn;
    this.classList.add("player" + turn);

    var gameOverVar = gameOver();
    if(gameOverVar==1){
      // document.write('<iframe src="gameover.html"></iframe>');
      document.querySelector("#status").textContent = "Game Won! Hit restart to play again!";
    }else if(gameOverVar==2){
      // console.log("Stalemate")
      document.querySelector("#status").textContent = "Stalemate! Hit restart to play again!";
    }
  });
}

//Reset game
var resetGame = document.querySelector(".btn");
resetGame.addEventListener("click",function(){location.reload();})

//Game over
function gameOver(){
  //Rows
  for (var i = 0; i < cellVars.length; i=i+3) {
    if(cellVars[i].textContent!="" &&
       (cellVars[i].textContent==cellVars[i+1].textContent) && (cellVars[i+1].textContent==cellVars[i+2].textContent)) {
          return 1;
        }
  }

  //Columns
  for (var i = 0; i < 3; i=i+1) {
    if(cellVars[i].textContent!="" && (cellVars[i].textContent==cellVars[i+3].textContent) && (cellVars[i+3].textContent==cellVars[i+6].textContent)) {
          return 1;}
  }

  //Diagonals
  if(
    ((cellVars[0].textContent!="") && (cellVars[0].textContent==cellVars[4].textContent) && (cellVars[4].textContent==cellVars[8].textContent))
    ||
    ((cellVars[2].textContent!="") && (cellVars[2].textContent==cellVars[4].textContent) && (cellVars[4].textContent==cellVars[6].textContent))
    ) {
        return 1;
      }

  //Stalemate
  for (var i = 0; i < cellVars.length; i=i+1) {
    if(cellVars[i].textContent==""){
      return 0;
    }
  }
  return 2;
}
