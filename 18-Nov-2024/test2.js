const readline = require("readline");

const data = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isOdd(num) {
  return num % 2 !== 0;
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
      for (let num of numbers) {
        if (isPrime(num) || isOdd(num)) {
          console.log("T");
        } else {
          console.log("F");
        }
      }
      data.close();
    }
  }
});
