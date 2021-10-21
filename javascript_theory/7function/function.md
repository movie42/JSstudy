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

