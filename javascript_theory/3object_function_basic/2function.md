# 함수

- 인수 : 함수 입력값(parameter)
- 반환값 : 함수 출력값(return) 

```javascript
function exampleFunction(a,b){
    // a, b 파라미터(인수)
    return a+b // 반환값(출력값)
}
```

## 함수 선언문

- 함수 선언문은 호이스팅이 가능하다.
- 값으로 변수에 할당이 가능하다. 이렇게 하면 변수 이름으로 함수 실행이 가능하다.
- 함수의 인수로도 넘길 수 있다.

```javascript
function isNumber(data){
    if(typeof data === 'number'){
        return true
    }
    return false
}

isNumber(3)
```

## 값으로써 함수

자바스크립트에서 함수는 객체다. 함수를 선언하면 내부적으로 함수의 이름을 변수 이름으로 한 변수와 함수 객체가 만들어지고 객체 참조에 저장된다.

함수를 다른 함수의 인수로 넘길수도 있다.

```javascript
const numberChecker = isNumber
numberChecker(4)
```

### 참조에 의한 호출과 값에 의한 호출

- 원시값과 객체를 인수로 넘겼을 때, 다르게 동작한다.

1. 원시값 전달

- 원시값은 값 자체가 인자에 전달되어 함수 안에서 안수를 변경해도 원래 값은 변하지 않는다.

2. 객체 전달

- 객체를 전달하면 참조값이 전달되므로 함수에서 객체를 변경하면 원래 값도 변경된다.


## 변수의 유효 범위

### 전역 유효 범위와 지역 유효 범위

- 어휘적 범위 : 프로그램의 구문만으로 유효 범위를 정한다.
- 자바스크립트는 어휘적 범위(lexcial scope)를 채택하고 있다.
- 전역변수와 지역변수가 있다.

```javascript
const a = "golbal";
function localVariable(){
    const b = "local"
    const a = "local";
    console.log(a, b)
    // local, local
}
localVariable()
console.log(a) // global
console.log(b) // 참조 오류
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

## 함수 리터럴

- 화살표 함수의 특징과 같다.
- 함수 리터럴을 사용할 때, 함수 부분이 리터럴이다. 
- 이 함수는 무명함수라고 부른다.
- 호이스팅이 발생하지 않는다.
- 반드시 뒤에 ;를 붙여야한다.

```javascript
const exampleFunction = function(x){
    return x*x
};

exampleFunction(2)

const arrowFunction = (x)=> x*x

arrowFunction(2)
```

