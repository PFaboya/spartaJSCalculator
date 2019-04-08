var calculatorType = prompt("Which calculator do you desire? basic(b) or advance(a)");
var firstNumber = prompt("Please choose the first number");

if (calculatorType == "b"){
  var operation = prompt("Choose which operation to use, addidition(+), subtraction(-), multiplication(*) or division(/)");
} else {
  var operation = prompt("Choose which operation to use, power(pow) or square root(sqrt)");
}

var secondNumber = prompt("please choose a second number");

if (operation == "+"){
  alert(Number(firstNumber) + Number(secondNumber));
} else if (operation == "-"){
  alert(Number(firstNumber) - Number(secondNumber));
} else if (operation == "*"){
  alert(Number(firstNumber) * Number(secondNumber));
} else if (operation == "/") {
  alert(Number(firstNumber) / Number(secondNumber));
}

if (operation == "pow"){
  alert(Number(firstNumber) ** Number(secondNumber));
} else if (operation == "sqrt"){
  alert(Math.sqrt(Number(firstNumber)));
}
