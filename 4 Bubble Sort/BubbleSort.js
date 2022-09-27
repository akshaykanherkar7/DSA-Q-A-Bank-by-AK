let arr = [3, 5, 3, 0, 6, 1];
let n = 6;

let swap = (arr1, i, j) => {
  let temp = arr1[i];
  arr1[i] = arr1[j];
  arr1[j] = temp;
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      swap(arr, j, j + 1);
    }
  }
}
console.log(arr);
