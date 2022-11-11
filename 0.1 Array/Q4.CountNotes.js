let Amount = 8000;

let bag = "";
bag += "[";

if (Amount % 100 === 0) {
  let count2000 = 0;
  let count1000 = 0;
  let count500 = 0;
  let count100 = 0;
  while (Amount >= 2000) {
    count2000++;
    Amount -= 2000;
  }
  bag += count2000 + ",";

  while (Amount >= 1000) {
    count1000++;
    Amount -= 1000;
  }
  bag += count1000 + ",";

  while (Amount >= 500) {
    count500++;
    Amount -= 500;
  }
  bag += count500 + ",";

  while (Amount >= 100) {
    count100++;
    Amount -= 100;
  }
  bag += count100;
}

bag += "]";

console.log(bag);
