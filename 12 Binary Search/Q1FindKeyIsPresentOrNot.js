let BinarySearch = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else if (arr[mid] < key) {
      start = mid + 1;
    }
  }
  return -1;
};

let arr = [1, 2, 3, 4, 5, 6, 7];
let n = 7;
let key = 7;

console.log(BinarySearch(arr));
