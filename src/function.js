import readlineSyncModule from "readline-sync";

/* function googoo() {
  let turnOff;
  while (turnOff !== "종료") {
    console.log("============ 구구단 ============");
    const select = readlineSyncModule.question(
      "단수 입력(종료는 종료 라고 입력): "
    );
    turnOff = select;

    if (turnOff !== "종료") {
      const number = Number(select);
      if (number < 2) {
        console.log("2 이상의 숫자를 입력하세요.");
      } else {
        for (let i = 1; i < 10; i++) {
          console.log(number * i);
        }
      }
    }
  }
}

googoo(); */

// calculator
function calculator() {
  const firstNumber = readlineSyncModule.question("첫 번째 숫자 입력: ");
  const operator = readlineSyncModule.question("연산자 입력: ");
  const secondNumber = readlineSyncModule.question("두 번째 숫자 입력: ");
  if (operator === "/" && secondNumber === "0") {
    console.log("두 번째 숫자가 0인 경우는 나눗셈을 할 수 없습니다.");
    return;
  }
  if (operator === "+") {
    const result = Number(firstNumber + secondNumber);
    return console.log(
      `${firstNumber} ${operator} ${secondNumber} = ${result}`
    );
  }
  if (operator === "-") {
    const result = Number(firstNumber - secondNumber);
    return console.log(
      `${firstNumber} ${operator} ${secondNumber} = ${result}`
    );
  }
  if (operator === "*") {
    const result = Number(firstNumber * secondNumber);
    return console.log(
      `${firstNumber} ${operator} ${secondNumber} = ${result}`
    );
  }
  if (operator === "/") {
    const result = Number(firstNumber / secondNumber);
    return console.log(
      `${firstNumber} ${operator} ${secondNumber} = ${result}`
    );
  }
}

// calculator();
let turnOff = true;
let memo = [];
while (turnOff) {
  console.log("================ MEMO ==============");
  console.log("1. 메모 출력");
  console.log("2. 메모 작성");
  console.log("3. 종료");

  const menuSelect = readlineSyncModule.question("메뉴 선택: ");
  if (menuSelect === "3") turnOff = false;

  selectMenu();

  const writeMemo = (newMemo) => {
    memo.push(newMemo);
    console.log("메모가 추가되었습니다.", memo);
  };

  const selectMenu = (menuSelect) => {
    if (menuSelect === "1") {
      console.log(memo);
    }
    if (menuSelect === "2") {
      const addMemo = readlineSyncModule.question("메모 작성: ");
      writeMemo(addMemo);
    }
    if (menuSelect === "3") {
      console.log("종료되었습니다.");
    }
  };
}
