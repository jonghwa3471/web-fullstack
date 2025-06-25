import fileSystem from "fs";
import readlineSyncModule from "readline-sync";

/* const applyDiscount = (age) => {
  if (age > 0) {
    if (age < 20) {
      // 할인 로직
      console.log("20% 미성년자 할인이 적용됩니다.");
    } else {
      console.log("할인이 적용되지 않습니다.");
    }
  } else {
    console.log("올바른 나이를 입력해주세요.");
  }
}; */

const applyDiscount = (age) => {
  if (age <= 0) return console.log("올바른 나이를 입력해주세요.");
  if (age >= 20) {
    return console.log("할인이 적용되지 않습니다.");
  }
  console.log("20% 미성년자 할인이 적용됩니다.");
};

let turnOff = true;
let allMemo = [];
fileSystem.writeFileSync("memo.json", JSON.stringify(allMemo), "utf8");

const allMemos = () => {
  const memo = fileSystem.readFileSync("memo.json", "utf8");
  if (memo === "[]") {
    console.log("작성된 메모가 없습니다.");
  } else {
    console.log(JSON.parse(memo));
  }
};

const searchMemo = (memoTitle) => {
  const allMemo = fileSystem.readFileSync("memo.json", "utf8");
  const parsed = JSON.parse(allMemo);
  const foundMemo = parsed.find((memo) => memo[memoTitle]);
  if (!foundMemo) {
    console.log("존재하지 않는 메모 제목입니다.");
  } else {
    console.log(foundMemo[memoTitle]);
  }
};

const writeMemo = (memoTitle, memoPayload) => {
  allMemo = [...allMemo, { [memoTitle]: memoPayload }];
  const json = JSON.stringify(allMemo);
  fileSystem.writeFileSync("memo.json", json, "utf8");
  console.log(`메모가 추가되었습니다: ${json}`);
};

const deleteMemo = (memoTitle) => {
  const allMemo = fileSystem.readFileSync("memo.json", "utf8");
  const parsed = JSON.parse(allMemo);
  const foundMemo = parsed.find((memo) => memo[memoTitle]);
  if (!foundMemo) {
    console.log("존재하지 않는 메모 제목입니다.");
  } else {
    const filtered = parsed.filter((memo) => memo !== foundMemo);
    const json = JSON.stringify(filtered);
    fileSystem.writeFileSync("memo.json", json, "utf-8");
    console.log("해당 메모가 삭제 되었습니다.");
    allMemos();
  }
};

while (turnOff) {
  console.log("\n================ MEMO ==============");
  console.log("1: 모든 메모 불러오기");
  console.log("2: 제목으로 메모 불러오기");
  console.log("3: 메모 작성하기");
  console.log("4: 메모 삭제하기");
  console.log("5: 종료");

  const menuSelect = readlineSyncModule.question("메뉴 선택: ");

  if (menuSelect === "1") {
    allMemos();
  }

  if (menuSelect === "2") {
    const memoTitle = readlineSyncModule.question("메모 제목: ");
    searchMemo(memoTitle);
  }

  if (menuSelect === "3") {
    const memoTitle = readlineSyncModule.question("제목: ");
    let lines = [];
    while (true) {
      const line = readlineSyncModule.question(
        "내용을 입력하세요. 여러 줄 입력 가능: "
      );
      if (line === "!끝") break;
      lines.push(line);
    }
    const memoPayload = lines.join("\n");
    writeMemo(memoTitle, memoPayload);
  }

  if (menuSelect === "4") {
    const memoTitle = readlineSyncModule.question("제목: ");
    deleteMemo(memoTitle);
  }

  if (menuSelect === "5") turnOff = false;
}
