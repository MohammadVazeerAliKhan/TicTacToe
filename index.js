let cells = ['', '', '', '', '', '', '', '', ''];
const conditions = [
  [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
const btns = document.querySelectorAll('.btn');
let currentPlayer= 'X';
let result = document.querySelector('.result');
let tieIndicator = 0;
let tie = true;
const ticTacToe = (element, index) =>{
  tieIndicator++;
  element.value = currentPlayer;
  element.disabled = true;
  cells[index] = currentPlayer;


  if (currentPlayer == 'X'){
    currentPlayer = 'O';
  }
  else{
    currentPlayer = 'X';
  }

  result.innerHTML = `Player ${currentPlayer} Turn`;

  for (let i=0; i<conditions.length; i++){
    let condition = conditions[i];
    let a = cells[condition[0]];
    let b = cells[condition[1]];
    let c = cells[condition[2]];
    if (a == '' || b == ''  || c == ''){
      continue;
    }
    if (a == b  && b == c) {
      result.innerHTML = `Player ${a} Won!!!`;
      tie = false;
      for (let i=0; i< btns.length; i++){
        btns[i].disabled = true;
      }
    }
    else if(tieIndicator == 9 && tie){
      result.innerHTML = `Tied`;
    }
  }  
}

function reset(){
  currentPlayer= 'X';
  result.innerHTML = `Player ${currentPlayer} Turn`;
  tieIndicator = 0;
  tie= true;
  cells = ['', '', '', '', '', '', '', '', ''];
  for (let i=0; i<btns.length; i++){
    btns[i].value='';
    btns[i].disabled = false;
  }


}

document.querySelector('#reset').addEventListener('click',reset);

for (let i=0; i<btns.length; i++){
  btns[i].addEventListener('click', () => ticTacToe(btns[i], i));
}