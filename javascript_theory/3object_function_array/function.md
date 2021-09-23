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