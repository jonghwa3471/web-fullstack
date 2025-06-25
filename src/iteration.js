import readlineSyncModule from "readline-sync";

/* let turnOff;
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
} */

// for
/* for (let i = 0; i < 5; i++) {
  const padding = " ".repeat(5 - i - 1);
  const star = "*".repeat(i * 2 + 1);
  console.log(padding + star);
} */

// while
/* let turnOff = true;
while (turnOff) {
  console.log("================ MEMO ==============");
  console.log("1: 작성");
  console.log("2: 조회");
  console.log("3: 수정");
  console.log("4: 삭제");
  console.log("5: 추가");
  console.log("6: 추가");

  const menuSelect = readlineSyncModule.question("메뉴 선택: ");
  if (menuSelect === "1") console.log("작성");
  if (menuSelect === "2") console.log("조회");
  if (menuSelect === "3") console.log("수정");
  if (menuSelect === "4") console.log("삭제");
  if (menuSelect === "5") console.log("추가");

  if (menuSelect === "6") {
    console.log("종료");
    turnOff = false;
  }
} */

// list
const arr = [1, 2, 3, 4, 5];
let result = 0;
for (let i = 0; i < arr.length; i++) {
  result = result + arr[i];
  console.log(`현재 합계 : ${result} (${arr[i]}를 더함)`);
}
console.log(`최종 합계: ${result}`);
