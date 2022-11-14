let arr = [
  { taskId: 1, value: "Hello" },
  { taskId: 2, value: "My" },
  { taskId: 3, value: "Name" },
  { taskId: 4, value: "Name" },
  { taskId: 5, value: "Hello" },
];

let obj = {};
for (let i = 0; i < arr.length; i++) {
  let val = arr[i].value;
  if (obj[val] === undefined) {
    obj[val] = 1;
  } else {
    obj[val]++;
  }
}

let ans = [];
for (let key in obj) {
  for (let i = 0; i < arr.length; i++) {
    if (key === arr[i].value) {
      ans.push(arr[i]);
      break;
    }
  }
}
console.log(ans);
