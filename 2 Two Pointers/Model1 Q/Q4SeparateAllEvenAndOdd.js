// Q. Separate All Even and Odd elements from arr. Store Even elements in front and odd elements in last in array.

let arr = [12, 13, 14, 16, 19, 21, 18, 19, 16];

let left = 0;
let right = arr.length - 1;

while (left < right) {
  // Increment left index while we see 0 at left
  while (arr[left] % 2 === 0 && left < right) {
    left++;
  }

  // Decrement right index while we see 1 at right
  while (arr[right] % 2 !== 0 && left < right) {
    right--;
  }

  // If left is smaller than right then there is a 1 at left and a 0 at right. Exchange arr[left] with arr[right]
  if (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right++;
  }
}

console.log(arr);

// T.C --> O(N)
// S.C --> O(1)
