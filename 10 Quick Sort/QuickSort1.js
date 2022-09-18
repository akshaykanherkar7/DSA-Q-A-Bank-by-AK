// Quickly Sort it Ended
// Description
// You are given an array of N integers. Write QUICK SORT ALGORITHM to sort the numbers in ascending order
// DO NOT USE ANY BUILTIN FUNCTION TO SORT
// ALSO, YOU MUST NOT USE ANY OTHER ALGORITHM
// Input
// Input Format
// First line contains N
// Second line contains N space separated integers
// Constraints
// N < 1000
// Output
// Output Format
// Print the sorted numbers separated by space
// Sample Input 1
// 5
// 3 5 0 9 8
// Sample Output 1
// 0 3 5 8 9
// Hint
// Sample 1 Explanation
// Expected test case ;)

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  Qsort(n, arr);
}

let Qsort = (n, arr) => {
  QuickSort(arr, 0, n - 1);
  console.log(arr.join(" "));
};

let QuickSort = (arr, low, high) => {
  if (low < high) {
    let pind = partition(arr, low, high);
    QuickSort(arr, low, pind - 1);
    QuickSort(arr, pind + 1, high);
  }
};

let partition = (arr, low, high) => {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  i++;
  let temp = arr[i];
  arr[i] = pivot;
  arr[high] = temp;
  return i;
};

let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

if (process.env.USERNAME === "Akshay H. Kanherkar") {
  runProgram(`5
  3 5 0 9 8`);
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
