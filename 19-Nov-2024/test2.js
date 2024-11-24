const readline = require("readline");

const data = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
data.question("", (input) => {
  let = [a, b] = input.split(" ").map(Number);
  let dd = a
  let mm = b
  SetDays = `${mm} ${dd}, 2009 `;
  let Dayname = new Date(SetDays);
  let day = Dayname.getDay();
  if (day == 0) {
    console.log("Sunday");
  } else if (day == 1) {
    console.log("Monday");
  } else if (day == 2) {
    console.log("Tuesday");
  } else if (day == 3) {
    console.log("Wednesday");
  } else if (day == 4) {
    console.log("Thursday");
  } else if (day == 5) {
    console.log("Friday");
  } else if (day == 6) {
    console.log("Saturday");
  } 
  data.close();
});
