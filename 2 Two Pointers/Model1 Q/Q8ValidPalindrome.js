function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let str = input[line++];
    findPa(str);
  }
}

let findPa = (str) => {
  if (check(str)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

let check = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right && str[left] == str[right]) {
    left++;
    right--;
  }
  return isPal(left + 1, right, str) || isPal(left, right - 1, str);
};

let isPal = (left, right, str) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

if (process.env.USERNAME === "Akshay Kanherkar") {
  runProgram(`3
  aba
  abca
  abc`);
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
