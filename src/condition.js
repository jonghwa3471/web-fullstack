const hour = 17;

switch (true) {
  // 7시 9시 사이면 아침 식시 시간 출력
  case 7 <= hour && hour <= 9:
    console.log("아침 식사 시간");
    break;
  case 12 <= hour && hour <= 14:
    // 12시 14시 사이면 점심 시간 출력
    console.log("점심 시간");
    break;
  // 18시 20시 사이면 저녁 식사 시간 출력
  case 18 <= hour && hour <= 20:
    console.log("저녁 식사 시간");
    break;
  // 모든 case에 해당하지 않을 시 기본으로 식사 금지 출력
  default:
    console.log("식사 금지");
}

const operator1 = "*";

switch (operator1) {
  case "+":
    console.log("더하기");
    break;
  case "-":
    console.log("빼기");
    break;
  case "*":
    console.log("곱하기");
    break;
  case "/":
    console.log("나누기");
    break;
  default:
    console.log("연산기호가 아님");
}

const menuNumber = 5;

switch (menuNumber) {
  case 1:
    console.log("작성");
    break;
  case 2:
    console.log("조회");
    break;
  case 3:
    console.log("수정");
    break;
  case 4:
    console.log("삭제");
    break;
  case 5:
    console.log("추가기능");
    break;
  case 6:
    console.log("종료");
    break;
  default:
    console.log("메뉴 번호가 아님");
}
