// Q. Find is-there any Subarray with the given sum. return[Yes/No];

let arr = [1, 4, 20, 3, 10, 5];
let sum = 33;
let n = 6;

let find = (arr, n, sum) => {
  let windowSum = 0;
  let start = 0;
  for (let low = 0; low < n; low++) {
    while (windowSum < sum && start < n) {
      windowSum += arr[start];
      start++;
    }
    if (windowSum === sum) return true;
    windowSum -= arr[low];
  }
  return false;
};

let res = find(arr, n, sum);

if (res) {
  console.log("Yes");
} else {
  console.log("No");
}

//Final SW T.C --> O(N)

//Brute Force T.C --> O(N2)
