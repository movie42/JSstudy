# 함수 기본

자바스크립트를 처음 배우는 사람에게 함수를 가르쳐야 한다면 기본적으로 알려줄 수 있는 것들.

## 함수는 일급 객체다

자바스크립트 함수는 일급 객체이기 때문에 값으로 할당이 가능하다.
다른 함수에 값으로 주는 것도 가능하다.

## 함수를 선언하는 방법

### 함수 선언

function이 맨 앞에 나오고 그 다음에 이름, 인수를 받는 괄호와 실행 컨텍스트를 구분지을 수 있는 {}를 작성한다.
return으로 함수가 실행이 끝나고 반환할 값을 써준다. return은 함수의 실행이 종료되는 시점이고 그 이후로 무언가를 써도 동작하지 않는다.
자바스크립트에서 함수는 반드시 어떤 값을 return하지 않아도 된다.

```javascript
function sum(a, b) {
  return a + b;
}
```

### 함수 호출

함수는 반드시 호출을 해야 작동한다. 그 전에는 그저 실행 컨텍스트에 등록만 되어 있을 뿐이다.
함수를 호출 하는 방법은 함수의 이름을 쓰고 ()붙이면 된다.
괄호 안에 들어가는 값을 파라미터(인수)라고 부르고 넘길 값이 있으면 넘기면 된다.
함수를 설계할 때, 인수를 받도록 설계했다면 반드시 인수를 넘겨야한다.
인수는 설계할 때, 받기로 한 숫자보다 더 많이 넘길 수 있다.
너 많이 넘긴 값은 arguments 값으로 받거나 스프레드 연산자를 사용해 받아 활용할 수 있다.

```javascript
// 이렇게 하면 위에서 선언한 sum함수가 호출된다.
sum(1, 2);
// 이 함수를 콘솔에 찍으면 결과를 볼 수 있다.
// 만약에 함수에서 return 값을 넘기지 않았다면 undefined가 최종적으로 출력된다.
console.log(sum(1, 2)); // 3
```

## 함수를 실행하는 방법

- 함수 호출

```javascript
sum(1, 2);
```

- 메서드 호출

```javascript
user.getAge();
```

- 생성자 호출

```javascript
const newUser = new Human();
```

- call, apply



- 즉시실행함수(IIFE)

```javascript
(function () {})();
+function () {};
```

## 함수를 표현하는 방법

### 함수 선언문

위에서 설명

### 익명함수

함수에 이름이 없다.
함수 표현식을 쓰거나 중첩 함수 또는 즉시 실행함수 등을 표현할 때, 사용된다.
함수에 이름이 없기 때문에 다른 곳에서 재사용 할 수 없다.

```javascript
function sum(c) {
  // 이부분이 익명함수 함수의 이름이 없다.
  return function (a, b) {
    return a + b;
  };
}
```

### 함수 표현식 (리터럴)

함수 표현식은 변수를 선언 한 뒤, 익명 함수를 할당하는 방법이다.
호이스팅이 되지 않는다.
변수에 할당된 이름으로 호출할 수 있다.

```javascript
const sub = function (a, b) {
  return a - b;
};

sub(1, 2); // -1
```

### 화살표 함수

화살표 함수는 ES6 문법이다.
기본적인 모양은 익명 함수와 비슷하다.
화살표 다음 쓰는 값은 return값이다.
써야하는 내용이 길어질 경우 일반 함수처럼 {}안에 값을 넣고 return으로 값을 반환한다.
변수를 선언하고 거기에 기본 모양을 할당할 수 있다.

```javascript
() => "arrow function";

const multi = (a, b) => a * b;

multi(1, 2); // 2
```

- 인수 : 함수 입력값(parameter)
- 반환값 : 함수 출력값(return)

```javascript
function exampleFunction(a, b) {
  // a, b 파라미터(인수)
  return a + b; // 반환값(출력값)
}
```

## 값으로써 함수

위에서 말한 것 처럼 함수는 일급 객체이기 때문에 값으로 사용 할 수 있다.
다른 함수에 인수로 넘길 수 도 있다.

```javascript
function isNumber(value) {
  return typeof value === "number";
}

const numberChecker = isNumber("string");

console.log(numberChecker); // false

function add(a, b, func) {
  if (func(a) && func(b)) return "can not calculate";
  return a + b;
}

add(1, 2, isNumber); // 3
```

## 참조에 의한 호출과 값에 의한 호출

- 원시값과 객체를 인수로 넘겼을 때, 다르게 동작한다.

1. 원시값 전달

- 원시값은 값 자체가 인수에 전달되어 함수 안에서 안수를 변경해도 원래 값은 변하지 않는다.

2. 객체 전달

- 객체를 전달하면 참조값이 전달되므로 함수에서 객체를 변경하면 원래 값도 변경된다.
