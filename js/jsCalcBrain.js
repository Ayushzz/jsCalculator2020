let x = 0;
let operationOptions = ['Divide','Multiply','Subtract','Add'];
let workingOperation = "";

function updateDisplay(input) {
  let display = document.getElementById("display");
  let secondaryDisplay = document.getElementById("secondaryDisplay");

  if(display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {
    if (input === "Decimal") {
      display.innerHTML = "0.";
    }else if(input === "negative-value") {
      if(display.innerHTML.indexOf("-1") === -1) {
        display.innerHTML = "-" + display.innerHTML
      }
      else if(display.innerHTML.indexOf("-1" > -1)) {
        display.innerHTML = display.innerHTML.slice(1,display.innerHTML.length);
      }
    }
    else {
    display.innerHTML = input;
  }
}
 else if(operationOptions.indexOf(input) >= 0) {
    //console.log("Dealing with a operation");
    if(x === display.innerHTML) {
      workingOperation = input;
    }
    else if(workingOperation === "") {
    workingOperation = input;
    x = display.innerHTML;
    secondaryDisplay.innerHTML = x;
    display.innerHTML=0;
  }
  else {
    x = calculate(x, display.innerHTML, workingOperation);
    //console.log("secondary");
    secondaryDisplay.innerHTML = x;
    display.innerHTML = 0;
    workingOperation = input;
  }
}
else if(input === "equals") {
    display.innerHTML = calculate(x, display.innerHTML,  workingOperation);
    x = 0;
    workingOperation = "";
    secondaryDisplay.innerHTML = x;
  }
else if(input === "Decimal"){
    //console.log("decimal is clicked");
    if(display.innerHTML.indexOf(".") === -1){
      display.innerHTML += ".";
    }
    //console.log("decimal skipped because decimal already in number");
  } else if(input === "negative-value") {
    if(display.innerHTML.indexOf("-1") === -1) {
      display.innerHTML = "-" + display.innerHTML
    }
    else if(display.innerHTML.indexOf("-1" > -1)) {
      display.innerHTML = display.innerHTML.slice(1,display.innerHTML.length);
    }
  }
else {
  display.innerHTML += input;
}
  console.log(x, "<= trailingResult",display.innerHTML,"<= display.innerHTML",workingOperation,"<= Opeartion");
}

function clearDisplay() {
  let display = document.getElementById("display");
  let secondaryDisplay = document.getElementById("secondaryDisplay");
  x=0;
  display.innerHTML = 0;
  secondaryDisplay.innerHTML =0;
}

function calculate(x, y, operation)
{
  let result;
  x = parseFloat(x);
  y = parseFloat(y);
  switch(operation)
  {
    case "Add":
    result = x + y;
    break;
    case "Subtract":
    result = x-y;
    break;
    case "Multiply":
    result = x*y;
    break;
    case "Divide":
    result = x/y;
    break;
    default:
    console.log("Calculate switch statement missed something");
  }
  return result.toString();
}
