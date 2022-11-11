const FlattenArr = (arr) => {
  let result = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(FlattenArr(item));
    } else {
      result.push(item);
    }
  });
  return result;
};

let arr = [1, 2, 3, [4, 5, 6, 7, 8, [9, 10, 11, [12, 13, 14]]]];
console.log(FlattenArr(arr));
