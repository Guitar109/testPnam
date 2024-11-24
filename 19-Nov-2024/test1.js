const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isEven(a) {
  return a % 2 === 0;
}

function printDiamondStar(n) {
  let x, y;
  x = Math.floor(n / 2);
  y = Math.floor(n / 2);

  if (!isEven(n)) {
    for (let i = 0; i < n; i++) {
      let line = "";
      for (let j = 0; j < n; j++) {
        if (Math.abs(i - y) + Math.abs(j - x) === Math.floor(n / 2)) {
          line += "*";
        } else {
          line += "-";
        }
      }
      console.log(line);
    }
  } else {
    y--;
    x--;

    for (let i = 0; i < n / 2; i++) {
      let line = "";
      for (let j = 0; j < n - 1; j++) {
        if (Math.abs(i - y) + Math.abs(j - x) === Math.floor((n - 1) / 2)) {
          line += "*";
        } else {
          line += "-";
        }
      }
      console.log(line);
    }

    y++;
    for (let i = Math.floor(n / 2); i < n; i++) {
      let line = "";
      for (let j = 0; j < n - 1; j++) {
        if (Math.abs(i - y) + Math.abs(j - x) === Math.floor((n - 1) / 2)) {
          line += "*";
        } else {
          line += "-";
        }
      }
      console.log(line);
    }
  }
}

readline.question("", (n) => {
  n = parseInt(n);
  if (n >= 1 && n <= 1000) {
    printDiamondStar(n);
  }
  readline.close();
});
