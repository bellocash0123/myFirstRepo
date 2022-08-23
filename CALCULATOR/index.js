let display = document.getElementById("display");
const numberZero = document.getElementById("0");
const numberOne = document.getElementById("1");
const numberTwo = document.getElementById("2");
const numberThree = document.getElementById("3");
const numberFour = document.getElementById("4");
const numberFive = document.getElementById("5");
const numberSix = document.getElementById("6");
const numberSeven = document.getElementById("7");
const numberEight = document.getElementById("8");
const numberNine = document.getElementById("9");
const delValue = document.getElementById("Del");

const clearValue = document.getElementById("C");

// Function declarations
function addValue(event){
  if (display.innerText === "0"){
    display.innerText = event.target.value;
  } else {
    display.innerText += event.target.value;
  }
}
function clearValueFunc(event) {
  display.innerText = "0";
}

function delValueFunc(event) {
  let result = display.innerText;

if (result.length === 1) {
   display.innerText = "0";
  } else {
    display.innerText = result.substring(0, result.length -1);
  }
}

// Event Listener
clearValue.addEventListener("click", clearValueFunc);
numberZero.addEventListener("click", addValue);
numberOne.addEventListener("click", addValue);
numberTwo.addEventListener("click", addValue);
numberThree.addEventListener("click", addValue);
numberFour.addEventListener("click", addValue);
numberFive.addEventListener("click", addValue);
numberSix.addEventListener("click", addValue);
numberSeven.addEventListener("click", addValue);
numberEight.addEventListener("click", addValue);
numberNine.addEventListener("click", addValue);
delValue.addEventListener("click", delValueFunc);
















