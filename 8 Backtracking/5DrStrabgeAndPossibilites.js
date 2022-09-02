// Dr. Strange and Possibilities -56:35:27
// Description
// Dr. Strange has n distinct integers from 1 to n. He uses his mind power and time stone to calculate all the possible subsets using the given n integers. Generate all the possible subsets.
// Input
// The first line of the input contains one integer n (1 ≤ n ≤ 10).
// Output
// Print each possible subset in a new line.
// Elements within the set must be in non-decreasing order. All the subsets must be distinct and sorted in ascending order or lexicographically. For an empty subset just print a blank line.
// Sample Input 1
// 3
// Sample Output 1
// 1
// 1 2
// 1 2 3
// 1 3
// 2
// 2 3
// 3

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  find(arr);
}

let find = (arr) => {
  GS([], 0, arr);
};

let GS = (ans, ind, arr) => {
  if (ans.length >= 0) {
    console.log(ans.join(" "));
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
  runProgram(`3`);
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
