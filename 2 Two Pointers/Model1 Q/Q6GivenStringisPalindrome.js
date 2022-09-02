// Q. Find the given string is palindrome or not.

let str = "naman";

let CheckPal = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

let ans = CheckPal(str);
console.log(ans ? "Yes it's palindrome" : "No it's palindrome");
