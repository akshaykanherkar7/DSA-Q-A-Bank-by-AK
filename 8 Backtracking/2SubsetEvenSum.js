// Subset even sum -56:43:23
// Description
// Given an array A having N positive integers. Count the number of non-empty subsequences of array A such that for each subsequence, the sum of all it's elements is even.
// Input
// First line: Single integer denoting the value of T - the number of test cases.
// For each test case:
// First line: Single integer denoting the value of N.
// Next line: N single space-separated integers denoting the elements of array A.
// Constraints:
// 1 <= T <= 100
// 1 <= N <= 15
// 1 <= A[ i ] <= 100
// Output
// For each test case, print in a new line, a single integer denoting the required count of subsequences.
// Sample Input 1
// 2
// 4
// 4 3 2 1
// 2
// 2 4
// Sample Output 1
// 7
// 3

function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    find(n, arr);
  }
}

let find = (n, arr) => {
  GS([], 0, arr);
  console.log(count);
  count = 0;
};
let count = 0;
let GS = (ans, ind, arr) => {
  if (ans.length > 0) {
    let sum = 0;
    for (let el of ans) {
      sum += el;
    }
    if (sum % 2 === 0) count++;
  }
  if (ind === arr.length) return;
  for (let i = ind; i < arr.length; i++) {
    ans.push(arr[i]);
    GS(ans, i + 1, arr);
    ans.pop();
  }
};

if (process.env.USERNAME === "Akshay H. Kanherkar") {
  runProgram(`2
  4
  4 3 2 1
  2
  2 4`);
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
