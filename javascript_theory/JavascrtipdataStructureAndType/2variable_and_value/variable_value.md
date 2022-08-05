# 변수와 값

- [변수와 값](#변수와-값)
  - [변수](#변수)
    - [변수](#변수-1)
    - [선언](#선언)
    - [끌어올림(호이스팅)과 중복 선언](#끌어올림호이스팅과-중복-선언)
    - [명명 규칙](#명명-규칙)
      - [표기법](#표기법)
  - [데이터 타입](#데이터-타입)
    - [원시타입](#원시타입)
      - [NaN](#nan)
      - [undefined, null](#undefined-null)
      - [템플릿 리터럴](#템플릿-리터럴)
    - [객체 타입](#객체-타입)

## 변수

### 변수

- 값을 담기 위해 이름을 붙인 상자

### 선언

- var, const, let으로 선언
- 변수 타입을 따로 지정하지 않음(int, str, float등)

```javascript
// 선언 방법
var age;
const name;
let address;
```

- 변수를 선언하기만 하면 undefined가 자동으로 할당됨.
- 프로그램에서 "="은 연산자는 오른쪽 값을 왼쪽 변수에 대입하겠다는 뜻.

```javascript
// 그래서 이런것도 가능하다.
let x = 0;
x = x + 1;
// or
x += 1;
// or

x++; // x을 증가한 후에 평가
++x; // x를 평가한 후에 증가
```

### 끌어올림(호이스팅)과 중복 선언

```javascript
console.log(age); // undefined
var age;
```

- 에러가 나지 않는다. 프로그램 중간에 변수를 선언해도 첫머리에 선언된 것 처럼 끌어 올림이 발생하기 때문이다.
- 하지만 변수는 첫머리에 선언하는 습관을 가지자.

### 명명 규칙

- 식별자 : 변수, 함수, 라벨 이름 등 사용자가 정의하는 이름
- 규칙
  1. 숫자를 첫글자로 사용 할 수 없음. \_, 알파벳, $중 하나여야한다.
  2. [예약어](http://www.w3bai.com/ko/js/js_reserved.html)를 식별자로 사용할 수 없음.

#### 표기법

1. camerCase
2. PascalCase
3. snake_case

## 데이터 타입

- **자바스크립트는 동적 타입 언어**이기 때문에 프로그램을 실행할 때 변수 타입이 변환될 수 있다.(장단이 있다.)

### 원시타입

- 숫자, 문자열, 논리값, 특수한 값, 심벌
- 불변 값이다.

#### NaN

- 원시타입이다.
- 숫자다.
- 0을 0으로 나누거나, Infinity를 Infinity로 나누 결과값, 음수의 제곱근 등 숫자로 표현할 수 없는 부정 값.
- [isNaN()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN)

#### undefined, null

- undefined : 할당된 값 없음
- null : 비어있음

#### 템플릿 리터럴

```javascript
// 일반적인 선언은 "", ''으로 문자열 선언
const nameZ = "Z";
const nameA = `A`;

// 변수를 표현해줘야 하는 경우 플레이스 홀더를 사용해 유용하게 사용 가능
const address = `${nameZ}'s address : Korea`;

// 템플릿 리터럴을 사용하지 않을 경우
const addressA = nameA + "'s adress : Korea";
```

### 객체 타입

- 원시타입을 제외한 모든 값
