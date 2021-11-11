# FPJ

> 출처
> [Functional Programming Jargon](https://github.com/sphilee/functional-programming-jargon)

> 동작 예제
> [FPJ](https://codesandbox.io/s/fpj-ou9u1)

## Arity

함수가 취하는 인수의 갯수.

## HOF(고차함수 : Higher-Order Function)

함수를 인수로 사용하거나 함수를 반환하는 함수

```javascript
const filter = (predicate, xs) => xs.filter(predicate);

const is = (type) => (x) => Object(x) instanceof type;

filter(is(Number), [0, "1", 2, null]);
```

## Partial Application(부분함수)

인수 중 일부를 원래 함수에 미리 채워서 새 함수를 만드는 것.
부분함수를 사용하면 데이터를 보유 할 때 데이터를 조작해서 보다 간단한 함수를 작성할 수 있다.

```javascript
const partial =
  (f, ...args) =>
  (...moreArgs) =>
    f(...args, ...moresArgs);

const add3 = (a, b, c) => a + b + c;

const fivePlus = partial(add3, 2, 3);

fivePlus(4);

// Function.prototype.bind를 사용하여 부분적용 가능
const add1More = add3.bind(null, 2, 3);

add1More(1);
```

## Currying

부분함수와 비슷하다. 어떤 차이가 있을까요?

함수가 호출될 때마다 하나의 인수만 허용하고 모든 인수가 전달될 때까지 인수 하나를 취하는 함수를 리턴한다.

```javascript
const sum = (a, b) => a + b;

const curriedSum = (a) => (b) => a + b;

curriedSum(40)(2);
const add2 = curriedSum(2);
add2(10);
```

## Closure

클로저는 범위 외부의 변수에 액세스하는 방법.
그러니까 이것이 클로저인지 아닌지를 판단하는 방법은 함수 실행이 끝났는데, 참조값이 그대로 남아있다면 그건 클로저다.(이렇게 정리하니까 더어렵다.)

> 참조  
> [How do JavaScript Closures Work?](https://stackoverflow.com/questions/111102/how-do-javascript-closures-work)

Closures are useful whenever you need a private state associated with a function.

private instance variables

```javascript
function Car(manufacturer, model, year, color) {
  return {
    toString() {
      return `${manufacturer} ${model} (${year} ${color})`;
    }
  };
}

const car = new Car("Hyundai", "Genecise", 2020, "black");

console.log(car.toString());
```

functional programing

```javascript

```
