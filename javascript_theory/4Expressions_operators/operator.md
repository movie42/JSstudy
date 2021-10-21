# 연산자

- [연산자](#연산자)
  - [표현식](#표현식)
  - [연산자](#연산자-1)
  - [산술 연산](#산술-연산)
    - [이항 연산](#이항-연산)
    - [단항 연산](#단항-연산)
    - [부동소수점과 정확도 문제](#부동소수점과-정확도-문제)
  - [문자열 제어](#문자열-제어)
    - [문자열 연결](#문자열-연결)
    - [문자열 조작](#문자열-조작)
  - [논리 연산자, 관계 연산자](#논리-연산자-관계-연산자)
  - [비트 연산](#비트-연산)
    - [비트 논리 연산](#비트-논리-연산)

## 표현식

- 결과적으로 어떤 값으로 평가되는 것
- 숫자, 문자열, 논리값 등 원시값과 변수, 프로퍼티, 배열 요소, 함수 호출, 메서드 호출

> 3.14, "hello", true, false, null
> sum, a[3], square(5), card.getSum()

## 연산자  

> a + b

- +가 연산자다. 
- 연산대상이 되는 것을 피연산자라고 부른다. 
- 단항, 이상, 삼항 연산자로 분류
- 연산자에는 우선순위가 있다. 

> +,- < *, /
> ()로 묶을 경우 우선 순위를 바꿀 수 있다. 

- 변수 값을 바꾸는 표현식을 부수효과가 있는 표현식이라고 한다. 

> ++x, x++, --x, x--, a = b, delete

## 산술 연산 

### 이항 연산

- 정수끼리 나누어도 결과가 부동소수점이 된다. 
- 나머지 연산자 %의 피연산자는 부동소수점이다.
- +연산자는 피연산자중 하나가 문자열이면 나머지 피연산자를 문자열로 만든다.

```javascript
let a = 1 + 'j' 
console.log(a) -> '1j'

let b = 1 + '1'
console.log(a) -> '11'
```

- 계산할수 없는 경우 NaN으로 평가한다. undefined이면 NaN으로 평가한다.
- true인 경우 1, false, null인경우 0으로 평가한다.

### 단항 연산

```javascript
const n = 5
// a++, ++a의 평가 방법이 다르다. 
let a = 1
// a를 평가하고 1을 더한다.
a++ 

// a에 1을 더하고 평가한다.
++a

//예

for(let i=0; i<n; i++){
    console.log(i) // 0,1,2,3,4
}

for(let i=1; i<n; ++i){
    console.log(i) // 1,2,3,4
}
```

[evaluate.js](./evaluate.js)

```javascript
let b = "1"

console.log(typeof +b) // number
console.log(typeof b) // string
```

```javascript
a += b 
// a = a+b 와 같다.
```

- 위의 경우가 가능한 이유는 수학에서 =은 양 옆의 항의 값이 같다는 의미이지만 프로그래밍은 대입의 개념이기 때문이다. 
- 그밖에 Math 객체의 프로퍼티를 사용하여 복합적 수학 연산이 가능하다. 
  
[Math](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math)

### [부동소수점과 정확도 문제](https://bigtop.tistory.com/47)

- 쇼핑몰에서 가격 계산을 하는 프로그램을 만들었다고 하면 이 문제가 중요해진다. 
- 수학 라이브러리를 사용하면 쉽게 해결할 수도 있다. 

## 문자열 제어

### 문자열 연결

```javascript
'hello' + 'world' // 'hello world'
'1' + '2' // '12'
10 + '1' // '101'
true + '1' //true1
false + (new Date()) // 'falseThu Oct 21 2021 15:31:27 GMT+0900 (한국 표준시)'
1 + {} // '1[object Object]'
1 + [] // '1'
```

### 문자열 조작

- [MDN 문제열 제대로 다루기](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- [MDN String](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String)

## 논리 연산자, 관계 연산자

[MDN 논리연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

[MDN 관계연산자](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators)

출처 : 33 Concepts Every JavaScript Developer Should Know
[Should I use === or == equality comparison operator in JavaScript?](https://bytearcher.com/articles/equality-comparison-operator-javascript/)

## 비트 연산

- 2진수 숫자의 자리별 값을 다루는 연산
  
### 비트 논리 연산

- 논리곱(&), 합(|), 배타적논리합(^), 논리 부정(~)이 있다.

[예제 bit_operator](bit_operator.js)

- 십진수 이진수로 변환
33을 이진수로 전환하면 10001이다. (33을 2로 나누면서 나머지와 몫을 순서대로 정렬하면 된다.)

예 33%2 = 1, 16%2 = 0, 8%2= 0, 4%2= 0, 2%2=0, 몫은 1
따라서 10001
십진수 전환은 2^5 + 2^0 = 33


