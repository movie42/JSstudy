// 커링 예제 1
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

const sum2 = curriedAdd(2);

console.log(sum2(3));
