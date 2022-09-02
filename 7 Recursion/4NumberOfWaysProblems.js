// Number of ways problems -55:59:35
// Description
// Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time. You have to count, how many possible ways Sandhya can run up to the stairs.
// Input
// input Format
// Input contains integer N that is number of steps
// Constraints
// N <= 30
// Output
// Output Format
// Output for each integer N the no of possible ways w.
// Sample Input 1
// 4
// Sample Output 1
// 7
// Hint
// No of the ways for n=4 are:-
// 1 1 1 1
// 1 1 2
// 2 1 1
// 1 2 1
// 1 3
// 3 1
// 2 2

function runProgram(input) {
  input = input.trim().split("\n");
  let n = input[0];
  find(n);
}

let find = (n) => {
  console.log(findWays(n));
};

let findWays = (n) => {
  if (n < 0) return 0;
  if (n === 0) return 1;
  return (sum = findWays(n - 1) + findWays(n - 2) + findWays(n - 3));
};

if (process.env.USERNAME === "Akshay H. Kanherkar") {
  runProgram(`4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
