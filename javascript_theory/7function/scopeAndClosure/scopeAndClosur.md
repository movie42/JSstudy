# 함수

## 변수의 유효 범위

### 전역 유효 범위와 지역 유효 범위

- 어휘적 범위 : 프로그램의 구문만으로 유효 범위를 정한다.
- 자바스크립트는 어휘적 범위(lexcial scope)를 채택하고 있다.
- 전역변수와 지역변수가 있다.

```javascript
const a = "golbal";
function localVariable() {
  const b = "local";
  const a = "local";
  console.log(a, b);
  // local, local
}
localVariable();
console.log(a); // global
console.log(b); // 참조 오류
```

- 전역 변수와 지역 변수의 이름이 같아도 오류가 발생하지 않는다. 이때는 전역 변수를 가리고 지역변수를 사용한다.
- 지역 변수의 값은 스코프를 벗어나서 사용할 수 없다.
- 함수 안에서도 호이스팅이 발생한다.
- 만약 스코프 안에서 변수 선언을 생략하면 전역변수로 사용할 수 있다.

### let과 const

- 블록 범위가 유효하다.

[var와 let, const의 차이](./let_const.js)

- let으로 선언하면 호이스팅이 일어나지 않는다.
- let으로 선언할 때, 똑같은 변수 이름을 지정하면 (같은 블록 범위 안에서) 오류가 발생한다.
- const는 let과 똑같이 작동하지만 반드시 초기화를 해야한다.
- const로 선언한 변수의 상수값을 변경할 수 없지만, 객체나 배열은 가능하다.

## 실행 컨텍스트와 스택

> 참조
> [javascript.info](https://ko.javascript.info/recursion#ref-3143)

실행 컨텍스트

- 함수 실행에 대한 세부 정보를 담고 있는 내부 데이터 구조.
- 제어 흐름의 현재 위치, 변수의 현재 값, this의 값 등 내부 정보가 실행 컨텍스트에 저장된다.

함수 내부에서 중첩 호출이 있을 경우에

1. 현재 함수의 실행이 일시 중지된다.
2. 중지된 함수와 연관된 실행 컨텍스트는 실행 컨텍스트 스텍이라는 특별한 자료 구조에 저장된다.
3. 중첩 호출이 실행된다.
4. 중첩 호출 실행이 끝나고 실행 컨텍스트 스택에서 일시 중단한 함수의 실행 컨텍스트를 꺼내오고, 중단한 함수의 실행을 다시 이어간다.

## 프로그램 평과와 실행 과정

> "그런데 함수가 생성된 이후에 외부 변수가 변경되면 어떤 일이 발생할까요? 함수는 새로운 값을 가져올까요? 아니면 생성 시점 이전의 값을 가져올까요?"
> "그런데 makeCounter를 살펴보다 보면 “counter를 여러 개 만들었을 때, 이 함수들은 서로 독립적일까? 함수와 중첩 함수 내 count 변수엔 어떤 값이 할당될까?” 같은 의문이 들기 마련입니다."
> [자바스크립트 인포](https://ko.javascript.info/closure) 그대로 인용

> 참고 자료
> [변수의 유효 범위와 클로저](https://ko.javascript.info/closure)

### 실행 가능한 코드

> 참고
> [모던 자바스크립트 입문](http://www.yes24.com/Product/Goods/59410698)

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

렉시컬 컴포넌트와 변수 환경 컴포넌트는 with 문을 사용할 때를 제외하고 내부 값이 같아 같은 것으로 취급한다. 디스 바인팅 컴포넌트는 그 함수를 호출한 객체의 참조가 저장되는 곳이다.

### 렉시컬 환경 컴포넌트의 구성 (LexicalEnviroment)

```
LexcialEnvironment:{
  EnvironmentRecord:{},
  OuterLexicalEnvironment Reference:{}
}
```

- 렉시컬 환경 컴포넌트는 자바스크립트 엔진이 자바스크립트 코드를 실행하기 위해 자원을 모아 둔 곳으로 구체적으로는 함수 또는 블록의 유효 범위 안에 있는 식별자와 그 결과값이 저장되는 곳이다.
- 환경 레코드와 외부 렉시컬 환경 참조 컴포넌트로 구성되어있다.

#### 환경 레코드(EnvironmentRecord)

유효 범위 안에 포함된 식별자를 기록하고 실행하는 영역이다.
자바스크립트 엔진은 유효 범위 안의 식별자와 결과값을 바인드해서 환경 레코드에 기록한다.

#### 외부 렉시컬 환경 참조(OuterLexical Environment Reference)

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
  },
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

### 가비지 컬렉션

사용하지 않는 객체의 메모리 영역은 가비지 컬렉터가 자동으로 해제한다. 사용하지 않는 객체는 다른 객체의 프로퍼티와 변수가 참조하지 않는 객체를 말한다.

## 클로저

클로저는 외부 환경 변수를 기억하는 함수다.
클로저 = 함수 객체 + 렉시컬 환경 컴포넌트

[클로저의 간단한 예](./7closure.js)

```javascript
function sum(a) {
  return function (b) {
    return a + b;
  };
}

const add1 = sum(1);
add1(5); // 6
```

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
    },
  };
}

const person = Person("Js", 18);
console.log(person.getName());
console.log(person.getAge());
person.setAge(20);
console.log(person.getAge());

const person2 = Person("peter", 30);
console.log(person2.getName());
console.log(person2.getAge());
person.setAge(10);
console.log(person2.getAge());
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

> [Javascript Scope and Closures](https://css-tricks.com/javascript-scope-closures/)
