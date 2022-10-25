//1st WAY

// function runProgram(input){
//     input = input.trim().split(" ");
//     let x = +input[0];
//     let n = +input[1];
//     EtopowerX(x,n);
// }

// let EtopowerX = (x,n) => {

//     let res = checkEtoX(x,n);
//     console.log(res.toFixed(4));
// };

// function checkEtoX(x,n) {
//     if(n === 0)
//     {
//         return 1;
//     }
//     else
//     {
//         let val = Math.pow(x,n);
//         let ans = val/fact(n) + checkEtoX(x,n-1);
//         return ans;
//     }
// }

// function fact(n){
//     let fact = 1;
//     for(let i=1; i<=n; i++)
//     {
//         fact = fact * i;
//     }
//     return fact;
// }

// if (process.env.USERNAME === "Akshay H. Kanherkar") {
//   runProgram(`4 2`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }

// 2nd WAY

function runProgram(input) {
  input = input.trim().split(" ");
  let x = +input[0];
  let n = +input[1];
  main(x, n);
}
function main(x, n) {
  let ans = 0;
  let term = 1;
  let i = 1;
  etox(x, n, i, ans, term);
}

function etox(x, n, i, ans, term) {
  if (i == n + 1) {
    ans += term;
    console.log(ans.toFixed(4));
    return;
  } else {
    ans += term;
    term = (term * x) / i;
    return etox(x, n, i + 1, ans, term);
  }
}

if (process.env.USERNAME === "Akshay Kanherkar") {
  runProgram(`4 2`);
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
