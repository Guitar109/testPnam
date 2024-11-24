const readline = require("readline");

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("", (inputNumber) => {
  let [a, b] = inputNumber.split(" ").map(Number);
  if (a > 2000000000 || b > 2000000000) {
    console.log("ค่าที่คุณกรอกมากเกินไป");
    input.close()
    return;
  } else {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    console.log(a);
    input.close();
  }
});
