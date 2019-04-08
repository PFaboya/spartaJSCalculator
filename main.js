var calculatorType = prompt("Which calculator do you desire? basic(b) or advance(a)");
var firstNumber = prompt("Please choose the first number");

if (calculatorType == "b"){
  var operation = prompt("Choose which operation to use, addidition(+), subtraction(-), multiplication(*) or division(/)");
} else {
  var operation = prompt("Choose which operation to use, power(pow) or square root(sqrt)");
}
if (operation != "sqrt"){
  var secondNumber = prompt("please choose a second number");
}

if (operation == "+" && calculatorType == "b"){
  alert(Number(firstNumber) + Number(secondNumber));
} else if (operation == "-" && calculatorType == "b"){
  alert(Number(firstNumber) - Number(secondNumber));
} else if (operation == "*" && calculatorType == "b"){
  alert(Number(firstNumber) * Number(secondNumber));
} else if (operation == "/" && calculatorType == "b") {
  alert(Number(firstNumber) / Number(secondNumber));
}

if (operation == "pow" && calculatorType == "a"){
  alert(Number(firstNumber) ** Number(secondNumber));
} else if (operation == "sqrt" && calculatorType == "a"){
  alert(Math.sqrt(Number(firstNumber)));
}
