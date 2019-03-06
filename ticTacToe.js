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
}

function startGame(cubesArray){
  for (i=0; i<9; i++){
    cubesArray[i].innerText="";
    currentPlayer="1";
  }
}

function checkWinner(){
  //checks the winning combinations of the las clicked cell
  //and verifies if 3 cells of the same type are the same
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
