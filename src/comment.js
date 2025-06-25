// comment
// declare numbers
const firstNumber = 10;
const secondNumber = 5;
const operator = "+";

let result;

// calculate with operator on each case
switch (operator) {
  case "+":
    result = firstNumber + secondNumber;
    break;
  case "-":
    result = firstNumber - secondNumber;
    break;
  case "*":
    result = firstNumber * secondNumber;
    break;
  case "/":
    result = firstNumber / secondNumber;
    break;
  default:
    result = "유효하지 않은 연산자입니다.";
}

console.log(`결과: ${result}`);
