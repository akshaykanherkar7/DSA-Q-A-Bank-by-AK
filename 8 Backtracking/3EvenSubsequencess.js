// Even subsequences -56:40:59
// Description
// Given an array A having N positive integers. Check if there exists any subsequence of array A that starts and ends with an even number.
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
// For each test case, print in a new line, "yes" (without quotes) if there exists any subsequence of array A that starts and ends with an even number. Else print "no" (without quotes).
// Sample Input 1
// 2
// 5
// 4 3 2 1 5
// 2
// 1 3
// Sample Output 1
// yes
// no

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
  console.log(count > 0 ? "yes" : "no");
  count = 0;
};

let count = 0;
let GS = (ans, ind, arr) => {
  if (ans.length > 0) {
    if (ans.length === 1) {
      if (ans[0] % 2 === 0) {
        count++;
      }
    } else {
      let start = 0;
      let end = ans.length - 1;
      if (ans[start] % 2 === 0 && ans[end] % 2 === 2) {
        count++;
      }
    }
  }

  if (ind === arr.length) {
    return;
  }
  for (let i = ind; i < arr.length; i++) {
    ans.push(arr[i]);
    GS(ans, i + 1, arr);
    ans.pop();
  }
};

if (process.env.USERNAME === "Akshay H. Kanherkar") {
  runProgram(`2
  5
  4 3 2 1 5
  2
  1 3`);
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
