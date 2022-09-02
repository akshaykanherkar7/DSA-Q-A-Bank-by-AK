// Q Find a Pair whose Sum equal to K [a+b = K]

let arr = [1, 4, 8, 12, 16, 20];
let k = 16;

arr.sort((a, b) => a - b); // Randomised Quick Sort - T.C --> O(nLogN)
let left = 0;
let right = arr.length - 1;

while (left < right) {
  // T.C --> O(N)
  let sum = arr[left] + arr[right];
  if (sum === k) {
    console.log("Yes");
    return;
  } else if (sum > k) {
    right--;
  } else if (sum < k) {
    left++;
  }
}

// Final T.C --> n + nLogN => O(nLogn)
