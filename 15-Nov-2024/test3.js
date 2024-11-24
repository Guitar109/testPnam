const readline = require("readline");

const data = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

data.question("", (inputNumber) => {

  const sortedNumbers = inputNumber
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
    if (sortedNumbers.some((num) => num >100)) {
      console.log("มีค่ามากกว่า 100");
      data.close();
      return;
    }
  data.question("", (inputOrder) => {
    const order = inputOrder.toUpperCase();

    const result = order.split("").map((char) => {
      if (char === "A") return sortedNumbers[2];
      if (char === "B") return sortedNumbers[1];
      if (char === "C") return sortedNumbers[0];
    });

    console.log(result.join(" "));
    data.close();
  });
});
