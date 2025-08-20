let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    
    let expression = display.value;
    if (/[\+\-\*\/%]$/.test(expression)) {
      expression = expression.slice(0, -1);
    }
    
 
    let result = eval(expression);

    
    if (Number.isFinite(result)) {
      display.value = parseFloat(result.toFixed(10)); // limit decimals
    } else {
      display.value = "Error";
    }
  } catch (e) {
    display.value = "Error";
  }
}
