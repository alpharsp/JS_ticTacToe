function mark(cubeNumber, cubesArray){
  if (cubesArray[cubeNumber-1].innerText==""){
    if (currentPlayer==1){
      cubesArray[cubeNumber-1].innerText="X";
      currentPlayer=2;
    }
    else if (currentPlayer==2){
      cubesArray[cubeNumber-1].innerText="O";
      currentPlayer=1;
    }
    else {
      //Nothing happens
    }
  }
  var winner = checkWinner(cubesArray, cubeNumber);
  if (winner){
    alert("WINNER");
  }
}

function startGame(cubesArray){
  for (i=0; i<9; i++){
    cubesArray[i].innerText="";
    currentPlayer="1";
  }
}

function checkWinner(cubesArray, boxNumber){
  var winnerPaths=[];
  for (var i=0; i<9; i++){
    winnerPaths[i]=[];
  }
  winnerPaths[0][0]="123";winnerPaths[0][1]="159";winnerPaths[0][2]="147";
  winnerPaths[2][0]="123";winnerPaths[2][1]="357";winnerPaths[2][2]="369";
  winnerPaths[6][0]="147";winnerPaths[6][1]="357";winnerPaths[6][2]="789";
  winnerPaths[8][0]="369";winnerPaths[8][1]="159";winnerPaths[8][2]="789";
  winnerPaths[4][0]="159";winnerPaths[4][1]="357";
  winnerPaths[4][2]="258";winnerPaths[4][3]="456";
  winnerPaths[1][0]="123";winnerPaths[1][1]="258";
  winnerPaths[3][0]="147";winnerPaths[3][1]="456";
  winnerPaths[5][0]="369";winnerPaths[5][1]="456";
  winnerPaths[7][0]="789";winnerPaths[7][1]="258";
  //checks the winning combinations of the las clicked cell
  //and verifies if 3 cells of the same type are the same
  var winner=false;
  for (var i=0; i<winnerPaths[boxNumber-1].length; i++){
    var numbers=[];
    numbers[0]=winnerPaths[boxNumber-1][i][0];
    numbers[1]=winnerPaths[boxNumber-1][i][1];
    numbers[2]=winnerPaths[boxNumber-1][i][2];
    // console.log(numbers[0]);
    // console.log(numbers[1]);
    // console.log(numbers[2]);
    if (cubesArray[numbers[0]-1].innerText == cubesArray[numbers[1]-1].innerText &&
        cubesArray[numbers[1]-1].innerText == cubesArray[numbers[2]-1].innerText &&
        cubesArray[numbers[0]-1].innerText != ""){
          winner=true;
        }
  }
  return winner;
}
var oneColor=false;
var twoColor=false;
var threeColor=false;
var cubes=[];
var status={};
var currentPlayer;
for (var i=0; i<9; i++){
  cubes[i]=document.getElementById("c" + (i+1));
  status[i]="";
}
startGame(cubes);
document.getElementById("restart").addEventListener("click", function(){startGame(cubes);});
cubes[0].addEventListener("click",function(){mark(1,cubes);});
cubes[1].addEventListener("click",function(){mark(2,cubes);});
cubes[2].addEventListener("click",function(){mark(3,cubes);});
cubes[3].addEventListener("click",function(){mark(4,cubes);});
cubes[4].addEventListener("click",function(){mark(5,cubes);});
cubes[5].addEventListener("click",function(){mark(6,cubes);});
cubes[6].addEventListener("click",function(){mark(7,cubes);});
cubes[7].addEventListener("click",function(){mark(8,cubes);});
cubes[8].addEventListener("click",function(){mark(9,cubes);});
