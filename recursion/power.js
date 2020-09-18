const power = (num, pow) => {
  if (num === 0) return 0;
  if (pow === 0) return 1;
  return num * power(num, pow - 1);
};

console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
