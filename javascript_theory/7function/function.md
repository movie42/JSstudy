# 함수

- 함수는 자바스크립트에서 가장 중요한 구성 요소이다.
- 함수는 일급 객체이다. 
- 클로저를 정의할 수 있다. 

## 함수를 정의하는 방법

- 선언문
- 리터럴
- Function 생성자로 정의
- 화살표 함수


```javascript
function sum(a, b){
    return a+b
}

const multi = function(a, b){
    return a*b
}

const divided = new Function('x', 'return x/x')

const subtract = (a, b)=> a - b
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
function fibonacci(number){
  if(number <= 1){
    return 1
  }
  
  return fibonacci(number - 1) + fibonacci(number - 2)
}

console.log(fibonacci(10))
```

> 하노이 탑
> 책에 실린 예제가 좀 이해하기가 어렵다.
 
```javascript
// n = 원반의 갯수
// a, b, c는 각각 탑 A, B, C를 나타냄 

function hanoi(n, a, b, c){
  if(n < 1) return
  // n-1개의 원반을 a->b로 옮김(c를 거쳐서)
  hanoi(n-1, a,c,b)
  // n-1개의 원반을 b->a로 옮김(c를 거쳐서)
  hanoi(n-1, b,a,c)
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

console.log(quickSort([100,44,2,1,63,13,10]))
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
var a = {x:1, y:2}
console.log(window.a)
function example(x){return "nothing"}
console.log(window.example)
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

* 책을 보고 중첩 함수 실행 문맥의 생성 과정에 대해서 대강 그려본 의사 코드...
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
    nastedFunction:{
      ExecutionContext={
        LexicalEnvironment:FunctionEnvironment,
      },
      VariableEnvironment:{},
      ThisBinding: 함수를 호출한 객체의 참조를 저장 이것이 this를 결정한다.,
      }
    }
  
  FunctionEnvironment = {
    ObjectEnvironmentRecord:{
      bindObject : function,
    },
    OuterLexicalEnvironmentReference:function
  }
```

함수의 실행 문맥, 렉시컬 환경, 환경 레코드가 생성되면 실행 문맥에 있는 디스 바인딩 컴포넌트에 그 함수를 호출한 객체의 참조를 저장한다. 이것으로 this를 결정한다. this는 동적의며 함수를 호출하는 상황에 따라 가리키는 객체가 바뀐다. 

함수가 종료되어 제어권이 호출한 코드로 돌아가면 일반적으로 실행 문맥과 함께 그 안에있는 렉시컬 환경 컴포넌트가 메모리에서 지워진다. **그러나** 그 함수 바깥에 위치한 함수의 참조가 환경 레코드에 유지되는 경우에는 렉시컬 환경 컴포넌트가 메모리에서 지워지지 않는다.(클로저의 단서)

### this

함수가 호출되어 실행되는 시점에 this 값이 결정된다.

```javascript
var user = {
  name : "programer",
  sayHi : function(){
    console.log(`hi, ${this.name}`)
  }
}
```

sayHi 메서드가 호출되는 실행 문맥의 디스 바인딩 컴포넌트가 가리키는 객체가 user이다. 따라서 this값이 user를 가리키기 때문에 this.name은 'programer'를 가리킨다. 

tom.sayHi 값은 함수의 참조다. 그래서 이 값을 다른 객체에 프로퍼티에 대입이 가능하다. 

```javascript
var user2 = {name : 'programer2'}
user2.sayHello = user.sayHello

user.sayHello()
```

디스 바인딩 컴포넌트가 가리키는 객체가 user에서 user2로 바뀜.

#### 다양한 상황에서 this가 가리키는 객체

1. 전역

```javascript
console.log(this) // window
```

2. 이벤트

[예제 html](./this.html)

```javascript
// 자기 자신을 가리킨다.
btn.addEventLitsener('click', function(){
  console.log(this)
  })
// 여기에서 화살표 함수를 쓰면 this는 어떻게 될까? 정답 window를 가리킨다.
btn.addEventLitsener('click', ()=>console.log(this))
```

3. 생성자 함수


[예제 생성자](./constructor.js)

```javascript
function User(name){
  this.name = name

  const sayHi = function(){
    return `Hi, ${this.name}`
  }
}

const user1 = new User('kiwi33')

console.log(user1.sayHi()) // kiwi33 
```

4. 생성자의 prototype 메서드 안에서
5. 직접 호출한 함수
6. apply, call 메서드로 호출한 함수
