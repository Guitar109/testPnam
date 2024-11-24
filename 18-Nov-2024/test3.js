const readline = require("readline");

const data = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let scores = [];
let count = 1;

function askScore() {
  if (count <= 4) {
    data.question(`กรุณากรอกคะแนนสำหรับคนที่ ${count}: `, (input) => {
      let scoresInput = input.split(" ").map(Number);
      let valid = scoresInput.every(
        (score) => score >= 1 && score <= 5 && !isNaN(score)
      );

      if (!valid) {
        console.log("คะเเนน 1-5 เท่านัั้น");
        data.close();
      } else {
        scores.push(scoresInput);
        count++;
        askScore();
      }
    });
  } else {
    let result = [];
    for (let i = 0; i < scores.length; i++) {
      let sum = scores[i].reduce((acc, scores) => acc + scores, 0);
      result.push(sum);
    }
    const max = Math.max(...result);
    const winner = result.indexOf(max) + 1;
    console.log(`${winner} : ${max}`);
    data.close();
  }
}
askScore();
