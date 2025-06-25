import readlineSyncModule from "readline-sync";

/* const comment = readlineSyncModule.question("입력: ");
console.log(`입력받은 말: ${comment}`);

const baseComment = "열심히 배워서 최고의 개발자가 되어보자!";
const userComment = readlineSyncModule.question("입력: ");
let isCorrect = false;

if (baseComment === userComment) isCorrect = true;

if (isCorrect) {
  console.log("정답입니다.");
} else {
  console.log("실패입니다.");
} */

let turnOff = true;
let memo = [];
while (turnOff) {
  console.log("================ MEMO ==============");
  console.log("1. 메모 출력");
  console.log("2. 메모 작성");
  console.log("3. 종료");

  const menuSelect = readlineSyncModule.question("메뉴 선택: ");
  if (menuSelect === "3") turnOff = false;

  if (menuSelect === "1") {
    console.log(memo);
  }
  if (menuSelect === "2") {
    const addMemo = readlineSyncModule.question("메모 작성: ");
    memo.push(addMemo);
    console.log("메모가 추가되었습니다.", memo);
  }
  if (menuSelect === "3") {
    console.log("종료되었습니다.");
  }
}
