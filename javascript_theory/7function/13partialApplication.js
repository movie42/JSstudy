function product(x, y) {
  return x * y;
}

const product2 = function (y) {
  return product(2, y);
};

console.log(product2(3)); //6

const product3 = product.bind(null, 3);

console.log(product3(4));
