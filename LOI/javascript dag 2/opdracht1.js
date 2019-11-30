let result = 0;
let exBtw = 0;
let output = document.getElementById("myOutput");
let btw = document.getElementById("btwOfTotal");
let RemovedBTW= document.getElementById("btwRemoved");

document.getElementById("myInput").addEventListener("change", addNumbers);
btwButton.addEventListener("click", calcBtw);

// listen to the event object and retrieve data from it.
function addNumbers(evt){
  result += parseInt(evt.target.value);
  evt.target.value = "";
  output.value = result;
}

function calcBtw(){
  exBtw = result * 0.21;
  btw.value = exBtw;
  console.log(exBtw)
  console.log(output.value);
  RemovedBTW.value = parseInt(output.value - exBtw);
}