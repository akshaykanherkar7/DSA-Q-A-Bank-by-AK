function runProgram(input) {
  input = input.trim().split("\n");
  let N = Number(input[0]);
  let arr = input[1].trim().split(" ").map(Number);
  smaller(N, arr);
}
function smaller(N, arr) {
  // Accepted
  let ans = [];
  let stack = [];
//   8
//   39 27 11 4 24 32 32 1
  for (let i = 0; i < N; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans[i] = -1;
    } else if (stack[stack.length - 1] < arr[i]) {
      ans[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  console.log(ans.join(" "));
}
//LeftSmaller

if (process.env.USERNAME === "Akshay Kanherkar") {
  runProgram(`8
  39 27 11 4 24 32 32 1`);
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
