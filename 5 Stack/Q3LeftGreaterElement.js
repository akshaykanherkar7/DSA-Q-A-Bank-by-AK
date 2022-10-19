let n = 8;
let arr = [39, 27, 11, 4, 24, 32, 32, 1];

let ans = [];
let stack = [];
for (let i = 0; i < n; i++) {
  while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
    stack.pop();
  }
  if (stack.length === 0) {
    ans[i] = -1;
  } else if (stack[stack.length - 1] >= arr[i]) {
    ans[i] = stack[stack.length - 1];
  }
  stack.push(arr[i]);
}
console.log(ans.join(" "));
