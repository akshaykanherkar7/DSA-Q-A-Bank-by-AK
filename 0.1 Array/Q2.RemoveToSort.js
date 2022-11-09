function runProgram(input) {
  input = input.trim().split("\n");
  var N = Number(input[0]);
  var arr = input[1].trim().split(" ").map(Number);

  removeSort(N, arr);
}

function removeSort(N, arr) {
  var bag = "";
  var left = 1;
  for (var i = 1; i < arr.length; i++) {
    if (arr[left - 1] <= arr[i]) {
      arr[left] = arr[i];
      left++;
    }
  }

  for (var j = 0; j < left; j++) {
    bag = bag + arr[j] + " ";
  }

  console.log(bag);
}
if (process.env.USERNAME === "Akshay Kanherkar") {
  runProgram(`10
  1 2 4 3 5 7 8 6 9 10`);
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
