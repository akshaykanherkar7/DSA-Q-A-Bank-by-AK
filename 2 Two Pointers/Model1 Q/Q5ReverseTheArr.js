// Q. Reverse The Array [in-place]

let arr = [7, 4, 9, 6, 21, 8, 11, 17];

let left = 0;
let right = arr.length - 1;
while (left < right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  left++;
  right--;
}

console.log(arr);

// T.C --> O(N)
// S.C --> O(1)
