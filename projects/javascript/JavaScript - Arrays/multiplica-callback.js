const arrayNums = [1, 2, 3, 4];

const newArrayNums = arrayNums.map((num) => num * 10);

console.log(newArrayNums);

// _________________________________ //

const arrayNumbers = [1, 2, 3, 4];

function multiplicaPorDez(num) {
  return num * 10;
}

const newArrayNumbers = arrayNumbers.map(multiplicaPorDez);

console.log(newArrayNumbers);
