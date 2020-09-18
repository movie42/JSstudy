const getDigit = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};
const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

const radixSort = (nums) => {
  let maxDigit = mostDigits(nums);
  console.log(maxDigit);
  for (let k = 0; k < maxDigit; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
};

console.log(
  radixSort([
    444,
    1,
    123,
    50980,
    345,
    23,
    12,
    6,
    7,
    8,
    2,
    22,
    1152059,
    12310,
    235,
    235,
    4,
    7,
    568,
    67,
    956,
    32423,
    3,
    52525,
    754602348,
    518471234,
  ])
);
