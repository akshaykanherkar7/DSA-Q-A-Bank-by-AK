// Dr. Strange and Possibilities II -56:33:46
// Description
// Dr. Strange is back again and this time he has an array A with n integers which may have duplicates. So he again uses his mind power and time stone to calculate all the possible subsets of the input array A. Generate all the possible subsets.
// Input
// The first line of the input contains one integer n (1 ≤ n ≤ 10) — The size of the array A.
// The second line of the input contains n integers (1 ≤ Ai ≤ 10) - The elements of the array A.
// Output
// Print each possible subset in a new line.
// Elements within the subset must be in non-decreasing order. All the subsets must be distinct and sorted lexicographically. For an empty subset just print a blank line.
// Sample Input 1
// 3
// 1 2 2
// Sample Output 1
// 1
// 1 2
// 1 2 2
// 2
// 2 2

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1]
    .trim()
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);
  find(n, arr);
}

let find = (n, arr) => {
  let obj = {};
  GS([], 0, arr);

  let res1 = [];
  for (let i = 0; i < res.length; i++) {
    if (res1.includes(res[i]) === false) {
      res1.push(res[i]);
    }
  }
  console.log(res1.join("\n"));
};

let res = [];
let GS = (ans, ind, arr) => {
  if (ans.length >= 0) {
    let a1 = ans.join(" ");
    res.push(a1);
  }
  if (ind === arr.length) return;
  for (let i = ind; i < arr.length; i++) {
    ans.push(arr[i]);
    GS(ans, i + 1, arr);
    ans.pop();
  }
};

if (process.env.USERNAME === "Akshay H. Kanherkar") {
  runProgram(`3
  1 2 2`);
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
