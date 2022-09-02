// find the max contiguous subarray -34:6:9
// Description
// you are given an integerarray, find the contiguous subarray (containing at least one number) which has
// the largest sum and return its sum.
// Input
// 1<=T<=10
// 1<=N<=100000
// -1e9<=Ai<=1e9
// Output
// output a single integer, the solution
// Sample Input 1
// 3
// 3
// 1 2 3
// 4
// -1 -1 0 1
// 3
// 2 -1 2
// Sample Output 1
// 6
// 1
// 3

// Kadane's Algorithm
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
  let currsum = 0;
  let maxsum = arr[0];
  for (let i = 0; i < n; i++) {
    // arr --> 1 -2 3
    currsum += arr[i];
    // console.log(currsum);
    currsum > maxsum && (maxsum = currsum);
    currsum < 0 && (currsum = 0);
  }
  console.log(maxsum);
};

if (process.env.USERNAME === "Akshay H. Kanherkar") {
  runProgram(`3
  3
  1 2 3
  4
  -1 -1 0 1
  3
  2 -1 2`);
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
