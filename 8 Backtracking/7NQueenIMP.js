// N Queens Variant Ended
// Description
// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
// Given an integer n, print the number of distinct solutions to the n-queens puzzle.
// queens.png
// Sample figure to understand the problem.
// Input
// The first line of the input contains one integer n (1 ≤ n ≤ 10).
// Output
// Print the number of distinct solutions possible.
// Sample Input 1
// 4
// Sample Output 1
// 2
// Sample Input 2
// 1
// Sample Output 2
// 1
// Hint
// There are two distinct solutions to the 4-queens puzzle as shown below.
// [
// [".Q..",  // Solution 1
// "...Q",
// "Q...",
// "..Q."],
// ["..Q.",  // Solution 2
// "Q...",
// "...Q",
// ".Q.."]
// ]
// So the count is 2.

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let chess = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      arr.push(0);
    }
    chess.push(arr);
  }
  find(chess);
}

let find = (chess) => {
  Nqueen(chess, 0);
  console.log(count);
};
let count = 0;
let Nqueen = (chess, row) => {
  if (row === chess.length) {
    count++;
    return count;
  }
  for (let col = 0; col < chess.length; col++) {
    if (isQueenSafe(chess, row, col)) {
      chess[row][col] = 1;
      Nqueen(chess, row + 1);
      chess[row][col] = 0;
    }
  }
};

let isQueenSafe = (chess, row, col) => {
  //Left-Diad Check
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (chess[i][j] == 1) return false;
  }
  //Vertical Check
  for (let i = row - 1; i >= 0; i--) {
    if (chess[i][col] == 1) return false;
  }
  //Right-Diag Check
  for (let i = row - 1, j = col + 1; i >= 0 && j < chess.length; i--, j++) {
    if (chess[i][j] == 1) return false;
  }
  return true;
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
