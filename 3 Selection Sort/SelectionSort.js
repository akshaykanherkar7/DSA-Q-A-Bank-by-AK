let arr = [3, 5, 3, 0, 6, 1];
let n = 6;

let swap = (arr1, i, j) => {
  let temp = arr1[i];
  arr1[i] = arr1[j];
  arr1[j] = temp;
};

for (let i = 0; i < n - 1; i++) {
  let min = i;
  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[min]) {
      min = j;
    }
  }
  swap(arr, min, i);
}

console.log(arr);
