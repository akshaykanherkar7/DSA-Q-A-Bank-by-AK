let fib = (n) => {
  if (n === 0 || n === 1) {
    return n;
  } else {
    let res = fib(n - 1) + fib(n - 2);
    return res;
  }
};

let n = 5;
let ans = fib(n);
console.log(ans);
