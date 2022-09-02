// Q. Merge Two Sorted Arrays.

let arr1 = [1, 3, 5, 7, 9];
let n1 = 5;
let arr2 = [2, 4, 6, 8, 10];
let n2 = 5;
let arr3 = [];
let n3 = n1 + n2;

// let MergeTwoArr = (arr1, n1, arr2, n2, arr3, n3) => {
//   let i = 0,
//     j = 0,
//     k = 0;
//   while (i < n1 && j < n2) {
//     if (arr1[i] < arr2[j]) {
//       arr3[k] = arr1[i];
//       i++;
//       k++;
//     } else if (arr1[j] < arr2[i]) {
//       arr3[k] = arr2[j];
//       j++;
//       k++;
//     }
//   }

// while (left1 < n1) {
//     arr3[k] = arr1[left1];
//     left1++;
//     k++;
//   }

//   while (left2 < n2) {
//     arr3[k++] = arr2[left2++];  // --> Post Increment
//   }
// };

// MergeTwoArr(arr1, n1, arr2, n2, arr3, n3);
// console.log(arr3);

// 2nd Way
let left1 = 0;
let left2 = 0;
while (left1 < n1 && left2 < n2) {
  if (arr1[left1] < arr2[left2]) {
    arr3.push(arr1[left1]);
    left1++;
  } else if (arr2[left2] < arr1[left1]) {
    arr3.push(arr2[left2]);
    left2++;
  }
}

while (left1 < n1) {
  arr3.push(arr1[left1]);
  left1++;
}

while (left2 < n2) {
  arr3.push(arr2[left2]);
  left2++;
}

console.log(arr3);

// Final T.C --> O(N);
