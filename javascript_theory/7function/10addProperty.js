// 함수에 프로퍼티 추가하기
function addProperty() {
  return;
}

addProperty.p = "A";
addProperty.showP = function () {
  return this.p;
};

const showProperty = addProperty;

console.log(showProperty.showP());

showProperty.p = "B";
console.log(showProperty.showP());

// 메모제이션

function fibonacci(n) {
  if (n < 2) return 1;
  if (!(n in fibonacci)) {
    fibonacci[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }

  return fibonacci[n];
}

console.log(fibonacci(10));
