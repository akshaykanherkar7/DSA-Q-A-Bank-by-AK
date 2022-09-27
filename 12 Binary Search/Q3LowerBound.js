let LowerBound = (arr, k) => {
  let start = 0;
  let end = arr.length - 1;
  let ans = -1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === k) {
      ans = mid;
      end = mid - 1;
    } else if (arr[mid] < k) {
      start = mid + 1;
    } else if (arr[mid] > k) {
      ans = mid;
      end = mid - 1;
    }
  }
  return ans;
};

let arr = [2, 4, 10, 10, 10, 15, 20];
let n = 7;
let k = 10;
console.log(LowerBound(arr, k));
