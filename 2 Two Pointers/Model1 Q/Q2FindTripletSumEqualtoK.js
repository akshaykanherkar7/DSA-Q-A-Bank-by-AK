// Q Find a Triplet whose Sum is Equal to K

let arr = [7, 4, 9, 6, 21, 8, 11, 17];
let k = 33;

arr.sort((a, b) => a - b); // T.C --> O(nlogN)

let check = (arr) => {
  for (let i = 0; i < arr.length - 2; i++) {
    // T.C --> O(N)
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      // T.C --> O(N)
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === k) {
        return "Yes";
      } else if (sum > k) {
        right--;
      } else if (sum < k) {
        left++;
      }
    }
  }
  return "No";
};

console.log(check(arr));

//Final T.C --> n + n + nLogN => O(N2)
