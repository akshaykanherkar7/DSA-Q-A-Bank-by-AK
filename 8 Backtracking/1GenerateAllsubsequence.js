// A String is a subsequence of a given String, that is generated by deleting some character of a given string
//    without changing its order.
// You are given a string S. You have to generate all the subsequences of the string S using a recursive
//    approach (duplicates allowed)
//INPUT
// 4
// abcd

//OUTPUT
// a
// ab
// abc
// abcd
// abd
// ac
// acd
// ad
// b
// bc
// bcd
// bd
// c
// cd
// d

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let str = input[1];
  find(n, str);
}

let find = (n, str) => {
  GS([], 0, str);
};

let GS = (ans, ind, str) => {
  if (ans.length > 0) {
    console.log(ans.join(" "));
  }
  if (ind === str.length) {
    return;
  }
  for (let i = ind; i < str.length; i++) {
    ans.push(str[i]);
    GS(ans, i + 1, str);
    ans.pop();
  }
};

if (process.env.USERNAME === "Akshay H. Kanherkar") {
  runProgram(`4
  abcd`);
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