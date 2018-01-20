var index;
var userInput;
function start(){
  index = Math.floor(Math.random() * 10) + 1;
  alert(index);
  updateTable(index);
}

function updateTable(number){
  switch (number) {
    case 1:
      document.getElementById('one').style.color = "blue";
      break;
    case 2:
      document.getElementById('two').style.color = "blue";
      break;
    case 3:
      document.getElementById('three').style.color = "blue";
      break;
    case 4:
      document.getElementById('four').style.color = "blue";
      break;
    case 5:
      document.getElementById('five').style.color = "blue";
      break;
    case 6:
      document.getElementById('six').style.color = "blue";
      break;
    case 7:
      document.getElementById('seven').style.color = "blue";
      break;
    case 8:
      document.getElementById('eight').style.color = "blue";
      break;
    default:
      document.getElementById('nine').style.color = "blue";
      break;
  }
}

function assignButton(number){
  alert("hi");
  if(number == "one"){
    userInput = 1;
    alert("1");
  }
  if(number == "two"){
    userInput = 2;
    alert("2");
  }
  if(number == "three"){
    userInput = 3;
    alert("3");
  }
  if(number == "four"){
    userInput = 4;
    alert("4");
  }
  if(number == "five"){
    userInput = 5;
    alert("5");
  }
  if(number == "six"){
    userInput = 6;
    alert("6");
  }
  if(number == "seven"){
    userInput = 7;
    alert("7");
  }
  if(number == "eight"){
    userInput = 8;
    alert("8");
  }
  if(number == "nine"){
    userInput = 9;
    alert("9");
  }
  checkNumber();
}

function checkNumber(){
  if(userInput==index){
    alert("correct");
  }
}

function restartGame(){

}
