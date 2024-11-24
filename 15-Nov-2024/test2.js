const readline = require("readline");

const data = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
data.question("", (input) => {
   
  const [input1, input2] = input.split(" ").map(Number);
  const sum = Math.sqrt(Math.pow(input1, 2) + Math.pow(input2, 2));
  console.log(parseFloat(sum).toFixed(6));
  data.close();
});
