function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  findfib(n);
}

let findfib = (n) => {
  console.log(fibSe(n));
};

let fibSe = (n) => {
  let f = new Array(n + 2);
  f[0] = 0;
  f[1] = 1;
  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
};

if (process.env.USERNAME === "Akshay H. Kanherkar") {
  runProgram(`5`);
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
