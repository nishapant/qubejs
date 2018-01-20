var items = [
  [1,2,3]
  [4,5,6]
  [7,8,9]
];

function start(){
  alert("hello");
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

function checkClick(){

}


function endGame{

}
