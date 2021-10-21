// nodejs로 실행 안됨
// 크롬 개발자 도구에서 실행 가능
var a = { x: 1, y: 2 };
console.log(window.a);

function example(x) {
  return "nothing";
}
console.log(window.example);
