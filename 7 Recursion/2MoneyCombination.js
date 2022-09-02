// Money Combinations -56:27:43
// Description
// Consider a money system consisting of n coins. Each coin has a positive integer value.
// Your task is to calculate the number of distinct ways you can produce a money sum x using the available coins.
// Input
// Input Format
// The first line contains the number coins, N and the desired sum of money, X
// The second line contains the values of the coins.
// Constraints
// 1<=N<=15
// 1<=X<=30
// 1<=coin value<=5
// Output
// Print the number of ways to get the sum of coins exactly X
// Sample Input 1
// 3 9
// 2 3 5
// Sample Output 1
// 8
// Hint
// The following combinations are used
// 2+2+5
// 2+5+2
// 5+2+2
// 3+3+3
// 2+2+2+3
// 2+2+3+2
// 2+3+2+2
// 3+2+2+2

function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  find(n, k, arr);
}

let find = (n, k, arr) => {
  console.log(GM(arr, n, k));
};

let GM = (arr, n, k) => {
  if (k === 0) return 1;
  if (k < 0) return 0;

  var sum = 0;
  for (let i = 0; i < n; i++) {
    sum += GM(arr, n, k - arr[i]);
  }
  return sum;
};

if (process.env.USERNAME === "Akshay H. Kanherkar") {
  runProgram(`3 9
  2 3 5`);
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
