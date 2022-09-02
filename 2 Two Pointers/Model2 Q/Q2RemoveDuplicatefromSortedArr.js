// Q. Remove the Duplicate Distinct Elements from the Array.

let arr = [1, 1, 1, 2, 2, 3, 4, 4, 4];
// let arr = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5];

let j = 0;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] !== arr[i + 1]) {
    arr[j] = arr[i];
    j++;
  }
}

arr[j] = arr[arr.length - 1];
for (let i = 0; i <= j; i++) {
  console.log(arr[i]);
}
