// Q  Swap All Zeros in fron and all Ones in end

let arr = [1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0];

let left = 0;
let right = arr.length - 1;

while (left < right) {
  // Increment left index while we see 0 at left
  while (arr[left] === 0 && left < right) {
    left++;
  }

  // Decrement right index while we see 1 at right
  while (arr[right] === 1 && left < right) {
    right--;
  }

  // If left is smaller than right then there is a 1 at left and a 0 at right. Exchange arr[left] with arr[right]
  if (left < right) {
    arr[left] = 0;
    arr[right] = 1;
    left++;
    right++;
  }
}

console.log(arr);
