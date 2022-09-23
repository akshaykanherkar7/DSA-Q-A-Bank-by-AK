// Follow The Knight Ended
// Description
// You are very good at playing chess since childhood and you knew the rules very much. You have a  10 X 10 chessboard and you want to explore all the possible squares on the board that the knight can be at in exactly N moves.It is placed at (i,j) coordinate initially. For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.
// You can refer the following diagram, the knight can move to any of the squares marked as X in 1 move.
// Image
// Input
// Input Format
// Input will consist of three space seperated integers i,j and N
// Constraints
// N < 10
// Output
// Print a single integer denoting the number of blocks on the chessboard that the knight can be at in exactly N moves.
// Sample Input 1
// 3 3 1
// Sample Output 1
// 8

function runProgram(input) {
  input = input.trim().split(" ").map(Number);
  (i = +input[0] - 1), (j = +input[1] - 1), (N = +input[2]);
  Knight(i, j, N);
}
var n = 10;
var grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

let Knight = (i, j, N) => {
  KnightMpves(i, j, N);
  let count = 0;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (grid[i][j] === 1) {
        count++;
      }
    }
  }
  console.log(count);
};

let KnightMpves = (x, y, N) => {
  if (x < 0 || y < 0 || x > 9 || y > 9) {
    return;
  }
  if (N === 0) {
    grid[x][y] = 1;
    return;
  }
  KnightMpves(x - 2, y + 1, N - 1);
  KnightMpves(x - 2, y - 1, N - 1);
  KnightMpves(x - 1, y + 2, N - 1);
  KnightMpves(x - 1, y - 2, N - 1);
  KnightMpves(x + 2, y + 1, N - 1);
  KnightMpves(x + 2, y - 1, N - 1);
  KnightMpves(x + 1, y - 2, N - 1);
  KnightMpves(x + 1, y + 2, N - 1);
};

if (process.env.USERNAME === "Akshay H. Kanherkar") {
  runProgram(`3 3 1`);
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
