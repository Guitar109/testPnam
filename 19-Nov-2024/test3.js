const readline = require("readline");
const data = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function gcd(a, b) {
  return !b ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

let N;
let count = 0;
let numbers = [];

data.on("line", (input) => {
  if (!N) {
    N = parseInt(input);
  } else {
    numbers.push(parseInt(input));
    count++;

    if (count === N) {
      let result = numbers.reduce((a, b) => lcm(a, b));
      console.log(result);
      data.close();
    }
  }
});
