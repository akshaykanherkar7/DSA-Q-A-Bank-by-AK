// Merge Sorting Ended
// Description
// You are given N numbers. Your task is to write MERGE SORT sorting algorithm (from scratch) to sort those N numbers.
// USING ANY OTHER ALGORITHM OR IN BUILT FUNCTION WOULD LEAD TO DISQUALIFICATION FROM NEXT HACKERRANK CONTEST
// Input
// Input Format:
// First line of input contains N
// Next line contains N space separated integers.
// Constraints:
// N < 1000000
// Output
// Output the sorted form of provided numbers
// Sample Input 1
// 5
// 3 5 0 9 8
// Sample Output 1
// 0 3 5 8 9

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  mergeSorting(n, arr);
}

let mergeSorting = (n, arr) => {
  let start = 0;
  let end = n - 1;
  divide(arr, start, end);
  console.log(arr.join(" "));
};

let divide = (arr, start, end) => {
  if (start >= end) {
    return;
  }
  let mid = start + Math.floor((end - start) / 2);
  divide(arr, start, mid);
  divide(arr, mid + 1, end);
  conqure(arr, start, mid, end);
};

let conqure = (arr, start, mid, end) => {
  let mergearr = [];
  let ind1 = start;
  let ind2 = mid + 1;
  let i = 0;
  while (ind1 <= mid && ind2 <= end) {
    if (arr[ind1] <= arr[ind2]) {
      mergearr[i++] = arr[ind1++];
    } else {
      mergearr[i++] = arr[ind2++];
    }
  }

  while (ind1 <= mid) {
    mergearr[i++] = arr[ind1++];
  }
  while (ind2 <= end) {
    mergearr[i++] = arr[ind2++];
  }

  for (let i = 0, j = start; i < mergearr.length; i++, j++) {
    arr[j] = mergearr[i];
  }
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
