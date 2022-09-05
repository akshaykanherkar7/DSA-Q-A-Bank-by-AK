// Valid palindrome II Ended
// Description
// Ankush and sachin are friends. Ankush had a string which he "claimed" to be a palindrome, but Ankush "claims" Sachin added one character to the string now.
// But you don't trust Ankush, you want to find out if he was lying about having a palindrome string.
// Note: If Sachin would've added a character to the string then after removing the character the string could be or could not be a palindrome, but since Ankuhsh "claims" sachin added a character, it is also possible that sachin did not add a character.
// So, find out if you can retrieve a palindrome string by deleting at most one character.
// Input
// Input Format
// The input consists of multiple testcases.
// The first line contains an integer t - the number of testcases.
// The next t lines each contain the string s.
// Constraints
// 1 <= t <= 100
// 1 <= |s| <= 10^5
// Output
// Output Format
// Print YES if you can retrieve a palindrome string by deleting at most 1 character, else NO
// Sample Input 1
// 3
// aba
// abca
// abc
// Sample Output 1
// YES
// YES
// NO

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

if (process.env.USERNAME === "Akshay H. Kanherkar") {
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
