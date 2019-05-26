var calculatorType = prompt("Which calculator do you desire? basic(b), advance(a) or BMI (bmi)");
if(calculatorType != "bmi"){
  var firstNumber = prompt("Please choose the first number");
}

if (calculatorType == "b"){
  var operation = prompt("Choose which operation to use, addidition(+), subtraction(-), multiplication(*) or division(/)");
} else if (calculatorType == "a") {
  var operation = prompt("Choose which operation to use, power(pow) or square root(sqrt)");
} else if (calculatorType == "bmi"){
  var measurementSystem = prompt("choose metric(m) or imperial(i) system")
}

if (calculatorType == "b" || operation == "pow"){
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

if (measurementSystem == "m"){
  var weight = prompt("Please enter Weight in kilograms");
  var height = prompt("Please enter Height in metres");
  alert(Number(weight) / (Number(height) ** 2));
}

if (measurementSystem == "i"){
  var weight = prompt("Please enter Weight in Pounds");
  var height = prompt("Please enter Height in inches");
  alert((Number(weight) / (Number(height) ** 2)) * 703);
}
