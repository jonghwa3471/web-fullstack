import fileSystem from "fs";
import readlineSyncModule from "readline-sync";
import CryptoJS from "crypto-js";

let turnOff = true;
let allMemo = [];
let isLock = false;

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
    if (memoTitle.startsWith("(잠금)")) {
      const secret = readlineSyncModule.question(
        "잠금된 메모 입니다. 암호 입력: "
      );
      try {
        const decrypted = CryptoJS.AES.decrypt(
          foundMemo[memoTitle].toString(),
          secret
        ).toString(CryptoJS.enc.Utf8);
        console.log(decrypted);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(foundMemo[memoTitle]);
    }
  }
};

const writeMemo = (memoTitle, memoPayload, secret) => {
  if (isLock) {
    const json = JSON.stringify(memoPayload);
    const encrypted = CryptoJS.AES.encrypt(json, secret).toString();
    allMemo = [...allMemo, { [`(잠금)${memoTitle}`]: encrypted }];
    const jsonMemo = JSON.stringify(allMemo);
    fileSystem.writeFileSync("memo.json", jsonMemo, "utf8");
    console.log(`메모가 암호화 되어 추가되었습니다: ${encrypted}`);
  } else {
    allMemo = [...allMemo, { [memoTitle]: memoPayload }];
    const json = JSON.stringify(allMemo);
    fileSystem.writeFileSync("memo.json", json, "utf8");
    console.log(`메모가 추가되었습니다: ${json}`);
  }
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

const checkLock = () => {
  const isLock = readlineSyncModule.question(
    "이 메모를 잠금하시겠습니까? (yes or no): "
  );
  if (!(isLock === "yes" || "no")) {
    checkLock();
  } else {
    return isLock;
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
        "내용을 입력하세요. 여러 줄 입력 가능(!end 로 입력 종료): "
      );
      if (line === "!end") break;
      lines.push(line);
    }
    const memoPayload = lines.join("\n");
    const result = checkLock();
    isLock = result === "yes" ? true : false;
    if (isLock) {
      const secret = readlineSyncModule.question("암호 입력: ");
      writeMemo(memoTitle, memoPayload, secret);
      // 인자 수가 2개가 넘어가므로 객체 형태로 보내거나 여러 함수로 쪼개는 것이 더 나을 듯
    } else {
      writeMemo(memoTitle, memoPayload);
    }
  }

  if (menuSelect === "4") {
    const memoTitle = readlineSyncModule.question("제목: ");
    deleteMemo(memoTitle);
  }

  if (menuSelect === "5") turnOff = false;
}
