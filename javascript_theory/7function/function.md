# 함수

- [함수](#함수)
  - [함수를 정의하는 방법](#함수를-정의하는-방법)
  - [중첩함수](#중첩함수)
  - [함수를 실행하는 방법](#함수를-실행하는-방법)
  - [재귀함수](#재귀함수)
  - [프로그램 평과와 실행 과정](#프로그램-평과와-실행-과정)
    - [실행 가능한 코드](#실행-가능한-코드)
    - [렉시컬 환경 컴포넌트의 구성](#렉시컬-환경-컴포넌트의-구성)
      - [환경 레코드](#환경-레코드)
      - [외부 렉시컬 환경 참조](#외부-렉시컬-환경-참조)
    - [환경 레코드의 구성](#환경-레코드의-구성)
    - [전역 환경과 전역 객체의 생성](#전역-환경과-전역-객체의-생성)
      - [프로그램의 평가와 전역 변수](#프로그램의-평가와-전역-변수)
    - [프로그램 실행과 실행 문맥](#프로그램-실행과-실행-문맥)
    - [환경 레코드와 지역 변수](#환경-레코드와-지역-변수)
    - [this](#this)
      - [다양한 상황에서 this가 가리키는 객체](#다양한-상황에서-this가-가리키는-객체)
    - [식별자 결정 : 유효범위 체인](#식별자-결정--유효범위-체인)
      - [유효범위 체인 = 외부 렉시컬 환경 체인 = 스코프 체인](#유효범위-체인--외부-렉시컬-환경-체인--스코프-체인)
    - [가비지 컬렉션](#가비지-컬렉션)
  - [클로저](#클로저)
    - [클로저의 성질](#클로저의-성질)
    - [정리](#정리)
    - [클로저를 응용한 예](#클로저를-응용한-예)
  - [이름 공간](#이름-공간)
    - [함수를 이름 공간으로 활용하기](#함수를-이름-공간으로-활용하기)
  - [객체로써의 함수](#객체로써의-함수)
    - [함수의 프로퍼티](#함수의-프로퍼티)
      - [Function.prototype의 프로퍼티](#functionprototype의-프로퍼티)
    - [함수에 프로퍼티 추가하기](#함수에-프로퍼티-추가하기)
      - [메모제이션(함수에 프로퍼티 추가 응용 예제)](#메모제이션함수에-프로퍼티-추가-응용-예제)
  - [고차 함수](#고차-함수)
    - [예제 모음](#예제-모음)
  - [ES6부터 추가된 함수 기능](#es6부터-추가된-함수-기능)
    - [화살표 함수](#화살표-함수)
      - [함수 리터럴과 차이점](#함수-리터럴과-차이점)
    - [이터레이터](#이터레이터)
      - [이터레이션](#이터레이션)
      - [이터네리터](#이터네리터)
    - [제너레이터](#제너레이터)
  - [여기까지 마쳤다면](#여기까지-마쳤다면)

## 함수를 정의하는 방법

- 선언문
- 리터럴
- Function 생성자로 정의
- 화살표 함수

```javascript
function sum(a, b) {
  return a + b;
}

const multi = function (a, b) {
  return a * b;
};

const divided = new Function("x", "return x/x");

const subtract = (a, b) => a - b;
```

## 중첩함수

- 특정한 함수 내부에 선언된 함수
- 외부함수의 최상위 레벨에만 중첩함수 사용 가능 (if, while안에는 사용 불가능)
- 중첩함수를 외부에서 불러 사용할 수 없음.

```javascript
function sort(array) {
  function quickSort(data) {
    if (data.length < 2) {
      return data;
    }
    const pivot = data[0];
    const left = [];
    const right = [];

    for (let i = 0; i < data.length; i++) {
      if (pivot > data[i]) {
        left.push(data[i]);
      } else if (pivot < data[i]) {
        right.push(data[i]);
      }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
  }

  let sorted = [...quickSort(array), "complete"];
  return sorted;
}

console.log(sort([44, 100, 2, 35, 1, 23]));
```

## 함수를 실행하는 방법

- 함수 호출
- 메서드 호출
- 생성자 호출
- call, apply
- 즉시실행함수

## 재귀함수

- 자기 자신을 호출하는 함수
- 재귀 호출은 반드시 멈춰야한다.
- 재귀 호출로 문제를 간단하게 해결할 수 있을 때 사용한다.

> 피보나치 함수 재귀 호출

```javascript
function fibonacci(number) {
  if (number <= 1) {
    return 1;
  }

  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(10));
```

> 하노이 탑
> 책에 실린 예제가 좀 이해하기가 어렵다.

```javascript
// n = 원반의 갯수
// a, b, c는 각각 탑 A, B, C를 나타냄

function hanoi(n, a, b, c) {
  if (n < 1) return;
  // n-1개의 원반을 a->b로 옮김(c를 거쳐서)
  hanoi(n - 1, a, c, b);
  // n-1개의 원반을 b->a로 옮김(c를 거쳐서)
  hanoi(n - 1, b, a, c);
}
```

> 퀵 정렬

```javascript
function quickSort(data) {
  if (data.length < 2) {
    return data;
  }
  const pivot = data[0];
  const left = [];
  const right = [];

  for (let i = 0; i < data.length; i++) {
    if (pivot > data[i]) {
      left.push(data[i]);
    } else if (pivot < data[i]) {
      right.push(data[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([100, 44, 2, 1, 63, 13, 10]));
```

## 프로그램 평과와 실행 과정

> Open The Gate Of Hell

- 클로저를 이해하기 위한 첫걸음

### 실행 가능한 코드

- 전역 코드(window)
- 함수 코드(함수)
- eval 코드(eval)

* 아래는 실재로 실행 불가능

```
// 실행 문맥
ExecutionContext ={
  // 렉시컬 환경 컴포넌트
  LexicalEnvironment:{},
  // 변수 환경 컴포넌트
  VariableEnvironment:{},
  // 디스 바인딩 컴포넌트
  ThisBinding: null,
}
```

렉시컬 컴포넌트와 변수 환경 컴포넌트는 with 문을 사용할 때를 제외하고 내부 값이 같아 같은 것으로 취급한다.
디스 바인팅 컴포넌트는 그 함수를 호출한 객체의 참조가 저장되는 곳이다.

### 렉시컬 환경 컴포넌트의 구성

- 렉시컬 환경 컴포넌트는 자바스크립트 엔진이 자바스크립트 코드를 실행하기 위해 자원을 모아 둔 곳으로 구체적으로는 함수 또는 블록의 유효 범위 안에 있는 식별자와 그 결과값이 저장되는 곳이다.
- 환경 레코드와 외부 렉시컬 환경 참조 컴포넌트로 구성되어있다.

```
LexcialEnvironment:{
  EnvironmentRecord:{},
  OuterLexicalEnvironment Reference:{}
}
```

#### 환경 레코드

유효 범위 안에 포함된 식별자를 기록하고 실행하는 영역이다.
자바스크립트 엔진은 유효 범위 안의 식별자와 결과값을 바인드해서 환경 레코드에 기록한다.

#### 외부 렉시컬 환경 참조

자바스크립트는 함수 안에서 함수를 중첩해서 정의할 수 있는 언어다. 따라서 자바스크립트 엔진은 유효 범위 너머의 유효 범위도 검색할 수 있어햐한다. 외부 렉시컬 환경 참조에는 함수를 둘러싸고 있는 코드가 속한 렉시컬 환경 컴포넌트의 참조가 저장된다.
중첩된 함수 안에서 바깥 코드에 정의된 변수를 읽거나 써야할 때, 자바스크립트 엔진은 외부 렉시컬 환경 참조를 따라 한단계씩 렉시컬 환경을 거슬러 올라가서 그 변수를 검색한다.

### 환경 레코드의 구성

환경 레코드는 렉시컬 환경 안의 식별자와 그 식별자가 가리키는 값의 묶음이 실제로 저장되는 영역이다.

```
EnvironmentRecord:{
  DeclarativeEnvironmentRecord:{},
  ObjectEnvironmentRecord:{}
}
```

- 선언적 환경 레코드 : 실제로 함수와 변수, catch 문의 식별자와 실행 결과가 저장되는 영역
- 객체 환경 레코드 : 실행 문맥 외부에 별도로 저장된 객체의 참조에서 데이터를 읽거나 쓴다. with문의 렉시컬 환경이나 전역객체처럼 별도의 객체에 저장된 데이터는 그 객체가 가진 키와 값의 쌍을 복사해 오는 것이 아니라 그 객체 전체의 참조를 가져와서 객체 환경 레코드의 bindObject라는 프로퍼티에 바인드하도록 만들어졌다.

### 전역 환경과 전역 객체의 생성

자바스크립트 인터프리터는 시작하마자마자 렉시컬 환경 타입의 전역 환경을 생성한다.
그 후에 전역 객체를 생성한다.
그 다음에 전역 환경의 객체 환경 레코드에 전역 객체의 참조를 대입한다.

```
GolbalEnvirnment = {
  ObjectEnvironmentRecord:{
    bindObject : window
  },
  OuterLexicalEnvironmentReference:null
}

ExecutionContext = {
  LexicalEnvironment : GlobalEnvironment,
  ThisBinding: window,
}
```

**웹 브라우저 자바스크립트 실행 환경 동작 순서**

1. 전역 환경 안에 객체 환경 레코드에 bindObject에 window가 할당된다. 외부 참조는 null이다.
2. 전역 실행 문맥의 this는 window를 가리킨다.

#### 프로그램의 평가와 전역 변수

전역 환경과 전역 객체 생성 후에 자바스크립트 프로그램을 읽어 들인다.
그 후에 평가를 시작함.
**최상위 레벨에 var 문으로 작성한 전역 변수나 함수는 전역 환경 레코드의 프로퍼티로 추가된다.**
(let이나 const는 var문처럼 작동하지 않는다.)
평가가 끝나면 프로그램이 실행된다. 프로그램은 실행 문맥 안에서 실행된다.

```javascript
var a = { x: 1, y: 2 };
console.log(window.a);
function example(x) {
  return "nothing";
}
console.log(window.example);
```

이것이 호이스팅의 실체다.

var, 선언문으로 선언한 함수는 [[Configuable]] 속성이 flase이기 때문에 delete 연산자로 삭제가 불가능하다.

### 프로그램 실행과 실행 문맥

실행 문맥은 스택으로 관리됨.

[callStack](../JSconcept30/callStack.md)

### 환경 레코드와 지역 변수

- 함수를 호출하면 현재 실행중인 코드 작업을 일시적으로 중단하고 실행 문맥 영역을 생성한다.
- 그 후 프로그램의 실행 흐름이 그 실행 문맥으로 이동한다.
- 함수의 실행 문맥이 호출 스택에 push되고 실행 문맥 안에 렉시컬 환경 컴포넌트를 생성한다.
- 이 렉시컬 환경 컴포넌트는 환경 레코드를 가지고 있다.
- 환경 레코드 안에 그 함수 안에서 선언된 중첩 함수의 참조와 변수를 기록한다. (함수 안밖의 환경을 기록한다.)
- 이 환경 레코드는 사용자가 읽거나 쓸 수 없다.
- 이 환경 레코드는 함수의 인자, 함수 안에서 선언된 중첩 함수의 참조, 함수 안에서 var로 선언한 지역 변수,argument를 기록하는 용도로 사용한다.

* 책을 보고 중첩 함수 실행 문맥의 생성 과정에 대해서 그려본 의사 코드...
* 만약 누군가 문서를 보고 있는데 틀린것이 있다면 알려주세요.

```
  ExecutionContext ={
    // 렉시컬 환경 컴포넌트
    LexicalEnvironment:GlobalEnvirnment,
    },
    // 변수 환경 컴포넌트
    VariableEnvironment:{},
    // 디스 바인딩 컴포넌트
    ThisBinding: null,
  }

  GolbalEnvirnment = {
    ObjectEnvironmentRecord:{
      bindObject : window
    },
    OuterLexicalEnvironmentReference:null
  }

  window={
    globalVariable: var,
    function,
    globalObject(???)
  }

  function = {
      ExecutionContext={
        LexicalEnvironment:FunctionEnvironment
      },
      VariableEnvironment:{},
      ThisBinding: 함수를 호출한 객체의 참조를 저장 이것이 this를 결정한다.,
      }
    }

  FunctionEnvironment = {
    ObjectEnvironmentRecord:{
      bindObject : window,
    },
    OuterLexicalEnvironmentReference:window
  }
```

함수의 실행 문맥, 렉시컬 환경, 환경 레코드가 생성되면 실행 문맥에 있는 디스 바인딩 컴포넌트에 그 함수를 호출한 객체의 참조를 저장한다. 이것으로 this를 결정한다. this는 동적의며 함수를 호출하는 상황에 따라 가리키는 객체가 바뀐다.

함수가 종료되어 제어권이 호출한 코드로 돌아가면 일반적으로 실행 문맥과 함께 그 안에있는 렉시컬 환경 컴포넌트가 메모리에서 지워진다. **그러나** 그 함수 바깥에 위치한 함수의 참조가 환경 레코드에 유지되는 경우에는 렉시컬 환경 컴포넌트가 메모리에서 지워지지 않는다.(클로저의 단서)

### this

함수가 호출되어 실행되는 시점에 this 값이 결정된다.

```javascript
var user = {
  name: "programer",
  sayHi: function () {
    console.log(`hi, ${this.name}`);
  }
};
```

sayHi 메서드가 호출되는 실행 문맥의 디스 바인딩 컴포넌트가 가리키는 객체가 user이다. 따라서 this값이 user를 가리키기 때문에 this.name은 'programer'를 가리킨다.

tom.sayHi 값은 함수의 참조다. 그래서 이 값을 다른 객체에 프로퍼티에 대입이 가능하다.

```javascript
var user2 = { name: "programer2" };
user2.sayHello = user.sayHello;

user.sayHello();
```

디스 바인딩 컴포넌트가 가리키는 객체가 user에서 user2로 바뀜.

#### 다양한 상황에서 this가 가리키는 객체

1. 전역

```javascript
console.log(this); // window
```

2. 이벤트

[예제 html](./this.html)

```javascript
// 자기 자신을 가리킨다.
btn.addEventLitsener("click", function () {
  console.log(this);
});
// 여기에서 화살표 함수를 쓰면 this는 어떻게 될까? 정답 window를 가리킨다.
btn.addEventLitsener("click", () => console.log(this));
```

3. 생성자 함수

[예제 생성자](./constructor.js)

```javascript
function User(name) {
  this.name = name;

  const sayHi = function () {
    return `Hi, ${this.name}`;
  };
}

const user1 = new User("kiwi33");

console.log(user1.sayHi()); // kiwi33
```

4. 생성자의 prototype 메서드 안에서
5. 직접 호출한 함수
6. apply, call 메서드로 호출한 함수

### 식별자 결정 : 유효범위 체인

- 식별자 결정 : 변수 a가 어디서 선언된 변수인지 결정하는 작업이다.
- 규칙 : 조금 더 안쪽 코드에 선언된 변수를 사용한다.

자바스크립트가 함수 g 안의 console.log(a+b+c)에서 변수 a, b, c를 식별하는 방법.

```javascript
var a = "A";

function f() {
  var b = "B";

  function g() {
    var c = "C";
    console.log(a + b + c);
  }

  g();
}

f();
```

- 속박변수 : 함수의 인수와 지역 변수(c, 닫힌함수 g)
- 자유 변수 : 그 외의 변수(a, b, 열린 함수 f)

#### 유효범위 체인 = 외부 렉시컬 환경 체인 = 스코프 체인

c는 함수 g안에서 선언된 속박 변수이기 때문에 함수 g의 환경 레코드 안에서 찾을 수 있다. 자유변수 b는 함수 g 바깥에서 선언된 변수이기 때문에 g가 속한 실행 문맥의 환경 레코드 안에서 찾을 수 없다. 따라서 외부 렉시컬 환경 참조를 따라 g를 호출한 함수 f가 속한 실행 문맥의 환경 레코드를 검색한다.(선언적 환경 레코드) 변수 b는 함수 f안에 선언되어 있기 때문에 함수 f의 환경 레코드안에서 찾을 수 있다. 식별자를 이것으로 결정한다. 변수 a도 마찬가지다. 만약에 a가 var로 선언되어있지 않으면 this바인딩 컴포넌트가 가리키는 전역 객체 안에서 검색하여 결정한다.

유효범위 체인 안에서 식별자를 찾지 못하면 참조 오류가 발생한다.

```
g_LexicalEnvironment:{
  DeclarativeEnvironmentRecord:{
    c : "C"
  },
  OuterLexicalEnvironmentReference : f_LexicalEnvironment
}

f_LexicalEnvironment:{
  DeclarativeEnvironmentRecord:{
    b : "B"
  },
  OuterLexicalEnvironmentReference : global_LexicalEnvironment
}

 global_LexicalEnvironment:{
  ObjectEnvironmentRecord:{
    bindObject:{
      a : "A"
    }
  },
  OuterLexicalEnvironmentReference : null
}
```

### 가비지 컬렉션

사용하지 않는 객체의 메모리 영역은 가비지 컬렉터가 자동으로 해제한다. 사용하지 않는 객체는 다른 객체의 프로퍼티와 변수가 참조하지 않는 객체를 말한다.

## 클로저

클로저 = 함수 객체 + 렉시컬 환경 컴포넌트

```javascript
var a = "A";

function f() {
  var b = "B";

  function g() {
    var c = "C";
    console.log(a + b + c);
  }

  g();
}

f();
```

위의 예에서 클로저는 window, f(), a, b라고 할 수 있다.

클로저 안에 모든 렉시컬 환경 컴포넌트를 함수 g의 함수 객체가 참조하기 때문에 클로저는 가비지 컬렉션 대상이 되지 않는다. 그래서 함수 g의 함수 객체가 존재하는한 클로저는 메모리에서 지워지지 않는다.

### 클로저의 성질

[7closuer](7closure.js)

```javascript
// 예제 출처 : 모던 자바스크립트 입문 291페이지 예제 8-6

function makeCounter() {
  var count = 0;
  return f;
  function f() {
    return count++;
  }
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
```

### 정리

- 외부 함수를 호출하면 그 함수의 렉시컬 환경 컴포넌트가 생성된다. 그리고 그 안에 중첩된 중첩 함수의 함수 객체를 생성해서 반환한다. 그래서 외부 함수의 렉시컬 환경 컴포넌트를 참조하는 중첩 함수가 정의한 클로저가 생성된다. 외부 함수는 클로저 생성하는 공장이라고 할 수 있다.
- 클로저의 내부 상태는 은폐되어서 밖에서 읽거나 쓸 수 없다.(캡슐화)
- 중첩 함수 객체가 있는 한 외부 함수가 속한 렉시컬 환경 컴포넌트는 지워지지 않는다. 외부 함수의 함수 객체가 사라져도 지워지지 않는다.
- 외부 함수가 속한 렉시컬 환경 컴포넌트는 클로저 내부 상태 자체다. 외부 함수가 호출될때마다 새롭게 생성된다.

### 클로저를 응용한 예

- 데이터와 데이터를 조작하는 함수를 하나로 묶을 수 있다. 객체 지향 프로그래밍에서 프로퍼티를 조작하는 메서드와 역할이 비슷하다.

> 출처 : 모던 자바스크립트 입문

[클로저 응용 예제](8closuers_pattern.js)

1. 여러 개의 내부 상태와 메서드를 가진 클로저

```javascript
function Person(name, age) {
  let _name = name;
  let _age = age;
  return {
    getName: function () {
      return _name;
    },
    getAge: function () {
      return _age;
    },
    setAge: function (x) {
      _age = x;
    }
  };
}

const person = Person("Js", 18);
console.log(person.getName());
console.log(person.getAge());
person.setAge(20);
console.log(person.getAge());
```

2. 함수 팩토리

```javascript
function makeMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const multi2 = makeMultiplier(2);
const multi10 = makeMultiplier(10);

console.log(multi2(3));
console.log(multi10(3));
```

## 이름 공간

### 함수를 이름 공간으로 활용하기

**모듈 패턴**

궁금한건... var로 했을 경우에는 전역 변수 오염이 되는데 const로 선언했을 때는 안 그런것 같은데, 모듈 패턴을 써야하나?

```javascript
const Module = {};

(function (_Module) {
  let name = "unknown";

  function getName() {
    return name;
  }

  _Module.showName = function () {
    console.log(getName());
  };

  _Module.setName = function (_name) {
    name = _name;
  };
})(Module);

Module.setName("Gilgamesh‎");
Module.showName();
```

## 객체로써의 함수

자바스크립트에서 함수는 객체다.

### 함수의 프로퍼티

- caller : 현재 실행 중인 함수를 호출한 함수
- length : 함수의 인자 개수
- name : 함수를 표시할 때 사용하는 이름
- prototype : 프로토타입 객체의 참조

#### Function.prototype의 프로퍼티

[9apply_call_bind](9apply_call_bind.js)

1. apply(), call()

- this 값과 함수의 인수를 사용하여 함수를 실행하는 메서드다. apply와 call의 동작은 본질적으로 같다. 함수를 넘기는 방법이 다르다.
- 실행중인 함수의 argument를 apply에 넘겨도 실행이 가능하다.

```javascript
function say(greeting, honorifics) {
  console.log(`${greeting}, ${honorifics} ${this.name}`);
}

const gilgamesh‎ = { name: "Gilgamesh‎" };
const enkidu = { name : "Enkidu"};

say.apply(gilgamesh, ["Hello", "Mr"])
say.apply(enkidum, ["안녕", "길가메시 친구"])
say.call(gilgamesh, "Hello", "Mr")
say.call(enkidum, "안녕", "길가메시 친구")
```

2. bind()

- 객체에 함수를 바인드한다.

```javascript
const sayToGilgamesh = say.bind(gilgamesh);
sayToGilgamesh("Hello", "Mr");
```

### 함수에 프로퍼티 추가하기

[10addProperty](10addProperty.js)

```javascript
function addProperty() {
  return;
}
addProperty.p = a;
addProperty.showP = function () {
  return p;
};
```

#### 메모제이션(함수에 프로퍼티 추가 응용 예제)

[10addProperty](10addProperty.js)

```javascript
function fibonacci(n) {
  if (n < 2) return 1;
  if (!(n in fibonacci)) {
    fibonacci[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }

  return fibonacci[n];
}

console.log(fibonacci(10));
```

## 고차 함수

- 함수를 인수로 받거나 반환하는 함수
- 예제를 많이 보고 사용해보는 게 좋은 것같다.

### 예제 모음

1. 함수를 인수로 사용하기

[출처 : Higher-Order Functions in JavaScript](https://www.sitepoint.com/higher-order-functions-javascript/)

```html
<!-- 이벤트 리스너 -->

<button id="btn">btn</button>

<script>
  const btn = document.querySelector("#btn");

  // 함수를 인수로 사용하는 예.

  btn.addEventListener("click", function () {
    console.log(`id : ${this.id}`);
  });

  function handleClick() {
    console.log(`id : ${this.id}`);
  }

  btn.addEventListener("click", handleClick);
</script>
```

**메모이제이션**

[11higherOrderFunction 예제1](11higherOrderFunction.js)

```javascript
function memorize(f) {
  const cache = {};
  return function (x) {
    if (cache[x] === undefined) cache[x] = f(x);
    return cache[x];
  };
}

function isPrime(n) {
  if (n < 2) return false;
  const m = Math.sqrt(n);
  for (let i = 0; i <= m; i++) {
    if (n % 1 === 0) return false;
  }
  return true;
}

const isPrimeMemo = memorize(isPrime);

const N = 1000;

for (let i = 2; i <= N; i++) {
  isPrimeMemo(i);
}

for (let i = 2; i + 2 <= N; i++) {
  if (isPrimeMemo(i) && isPrimeMemo(i + 2))
    console.log(i + "," + (i + 2));
}

// 피보나치

const memoFibonacci = memorize(function (num) {
  if (x < 2) return x;
  return memoFibonacci(x - 1) + memoFibonacci(x - 2);
});

for (let i = 0; i < 100; i++) {
  console.log(memoFibonacci(i));
}
```

2. 함수를 결과로 반환하기

일반적으로 생각할 수 있는 글자 바꾸기 함수. 문제 없이 동작은 하지만 재사용이 어렵다.
[출처 : Higher-Order Functions in JavaScript](https://www.sitepoint.com/higher-order-functions-javascript/)

```javascript
const oldPeople = function (text) {
  return text.replace(/millenials/gi, "Old People");
};

console.log(oldPeople("The Millenials are always up to something."));

const happify = function (text) {
  return text.replace(/baby boomers/gi, "Aging Happy People");
};

console.log(happify("The Baby Boomers just look the other way."));
```

**함수 합성**

```javascript
// 예제 1
const attitude = function (original, replacement, source) {
  return function (source) {
    return source.replace(replacement, original);
  };
};

const oldPeople = attitude(/millenials/gi, "Old People");
const happify = attitude(/baby boomers/gi, "Aging Happy People");

oldPeople("The Millenials are always up to something.");
happify("The Baby Boomers just look the other way.");
```

[11higherOrderFunction 예제2](11higherOrderFunction.js)

```javascript
// 예제 2
function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

function square(x) {
  return x * x;
}

function sum1(x) {
  return x + 1;
}

function minus2(x) {
  return x - 2;
}

const three = compose(square, sum1);
const five = compose(square, minus2);
const sumFive = compose(sum1, minus2);

console.log(three(3));
console.log(sumFive(5));
console.log(square(sumFive(5)));
```

3. 부분적용

인수를 여러개 받는 함수의 몇몇 인수를 상수로 지정해서 새로운 함수를 생성하는 기법

[13partailApplication](13partialApplication.js)

```javascript
function product(x, y) {
  return x * y;
}

const product2 = function (y) {
  return product(2, y);
};

console.log(product2(3)); //6

const product3 = product.bind(null, 3);

console.log(product3(4));
```

4. 커링

[Curring In Javascript](https://dev.to/spukas/curring-in-javascript-1o45)

인수를 두 개 이상 받는 함수를 분해해서 인수가 하나인 함수의 중첩 함수로 변환하는 작업을 말한다.

**보통 더하기를 한다고 하면 작성하는 함수**

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));
```

**커링**

[12curring 예제1](./12curring.js)

```javascript
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

const sum2 = curriedAdd(2);

console.log(sum2(3));
```

어디에서 유용할까?

1. 같은 인수를 넘기는 것을 피하기 위해서
2. make function compositions(함수 다발(??) 만들기)
3. 상태 유지

## ES6부터 추가된 함수 기능

### 화살표 함수

```javascript
// 작성방법
const squar = (x) => x * x;

// 반환값이 객체 리터럴이면 객체 리터럴을 () -그룹 연산자-로 묶어야한다.
const user = (name, age) => ({ name, age });
```

#### 함수 리터럴과 차이점

1. this값이 함수를 정의할 때 결정된다

- 함수 리터럴로 정의한 함수의 this값은 함수를 호출될때 결정된다.
- 화살표 함수는 함수를 정의할 때 this값이 결정된다.
- 이벤트 리스터의 값이 window로 고정되는 것도 이와 같은 이유일까?

```javascript
const obj = {
  say: function () {
    console.log(this);
    const f = function () {
      console.log(this);
    };
    f();
    const a = () => console.log(thi);
    a();
  }
};
obj.say();
```

2. arguments변수가 없다.

```javascript
const f = () => console.log(argument);
f(); // ReferenceError : arguments is not defined
```

3. 생성자로 사용할 수 없다.

```javascript
const Person = (name, age) => {
  this.name = name;
  this.age = age;
};

const kim = new Person("kim", 20); // TypeError : Person is not a constructor
```

4. yield 키워드를 사용할 수 없다.

- 제너레이터를 사용할 수 없다.

### 이터레이터

#### 이터레이션

- 반복 처리라는 뜻, 데이터 안의 요소를 연속적으로 꺼내는 행위.
- 내부적으로 처리되어 각 처리단계를 개발자가 제어할 수 없다.

```javascript
const a = [5, 4, 3];
a.forEach((value) => console.log(value));
```

#### 이터네리터

- 이터레이터는 반복 처리가 가능한 객체를 말한다.
- 반복 처리를 단계별로 제어가 가능하다.
- 배열은 Symbol.iterator 메서드를 가지고 있다.
- next 메서드를 가진다.
- next 메서드의 반환은 value 프로퍼티와 done 프로퍼티를 가진 객체이다.이때 vluae에는 꺼낸 값이 저장되고 done에는 반복이 끝났는지를 뜻하는 논리값이 저장된다.

```javascript
const a = [5, 4, 3];
const iter = a[Symbol.iterator]();

console.log(iter.next()); //Object {value:5, done:false}
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); //Object {value:undefined, done:true}
```

### 제너레이터

**제너레이터**

- 반복 가능한 이터레이터를 값으로 반환한다.
- 작업의 일시 정지와 재시작이 가능하며 자신의 상태를 관리한다.
- 제너레이터는 이터레이터의 반복 처리를 강력하게 지원한다.
- 반복 알고리즘을 유연하게 표현할 수 있다.

**정의와 실행**

```javascript
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

const iter = gen();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
```

- yield는 프로그램이 일시적으로 정지하는 위치다.
- 이터레이터의 next는 실행상태로 바꾼다.
- 이터레이터 객체는 처리를 재개할 수 있도록 제너레이터 함수의 내부 상태를 모두 저장한다.
- yield는 return처럼 사용할 수 있다.

- 제너레이터는 return으로 종료한다.
- 예외는 throw로 처리한다.

```javascript
function* idMaker() {
  let count = 0;
  while (true) {
    try {
      yield count++;
    } catch (e) {
      console.log("오류");
    }
  }
}

const iter = idMaker();
console.log(iter.next());
iter.throw(new Error("error"));
```

- yield\* 반복 가능한 객체에 위임이 가능하다.

## 여기까지 마쳤다면

[함수형 자바스크립트](../../javascript_FOP/README.md)
