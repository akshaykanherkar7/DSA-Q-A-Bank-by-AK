// let arr = [1, 2, 3, 4, 5, 6];
// //BruteForce
// let ans = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   ans.push(arr[i]);
// }
// console.log(ans);
// // TC => O(N)
// // SC => O(N)


// // Recursion
// const recursion = (arr, revArr, n) => {
//   if (n === 0) {
//     console.log(revArr);
//     return;
//   }
//   revArr.push(arr[n - 1]);
//   recursion(arr, revArr, n - 1);
// };

// let arr = [1, 2, 3, 4, 5, 6];
// let n = 6;
// let ans = recursion(arr, [], n);
// // TC => O(N)
// // SC => O(N)

//TwoPointer
