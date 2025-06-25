import fileSystem from "fs";
import readlineSyncModule from "readline-sync";

/* const myInfo = {
  name: "송종화",
  age: 26,
  email: "whdghk3471@gmail.com",
  phone: "010-1234-5678",
};

const json = JSON.stringify(myInfo);

fileSystem.writeFileSync("my-profile.json", json, "utf8");
fileSystem.unlinkSync("my-profile.json");
const data = fileSystem.readFileSync("my-profile.json", 'utf8');
*/

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
    console.log(foundMemo);
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
    const memoPayload = readlineSyncModule.question("내용: ");
    writeMemo(memoTitle, memoPayload);
  }

  if (menuSelect === "4") {
    const memoTitle = readlineSyncModule.question("제목: ");
    deleteMemo(memoTitle);
  }

  if (menuSelect === "5") turnOff = false;
}
