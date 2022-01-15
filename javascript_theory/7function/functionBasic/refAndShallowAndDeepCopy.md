# 값과 참조, 얕은 복사, 깊은 복사

원시 값은 값을 전달한다. 원시값인 변수를 다른 변수에 대입하면 값이 복사가 되어 변수에 배정된다. 그렇기 때문에 원본을 변형 시키지 않는다.

```javascript
let a = 1;

let b = a;
console.log(a, b); // 1, 1

b = 2;

console.log(a, b); // 1, 2
```

## 참조

만약 선언한 변수의 값이 배열이나 객체, 함수라면 변수는 메모리에 주어진 값을 참조하게 된다.(메모리 주소를 받는다.)
객체를 참조하고 있는 이 변수를 다른 변수 또는 함수에 넘기면 변수를 복사하는 것이 아니라 메모리 주소에 배정된 객체를 참조한다. 쉽게 생각해서 참조는 값을 빌려오는 행위라고 생각하면 될 것 같다.

빌려온 값은 내가 친구의 물건을 빌린 것 처럼 내 것이 아니다. 그래서 참조 값을 변형하면 당연히 원본 값이 변경된다.(친구의 플레이스테이션 5를 빌렸는데 동생이 지나가다 실수로 물컵을 그 위에 엎질렀다면... 아찔하다.)

## 함수에 들어간 값은 원본값을 변경시킬까?

[function](./functionMutation.js)

- 원시값은 변경되지 않는다.
- 객체, 배열은 참조값이 인자로 들어가기 때문에 변경된다.
- 그래서 얕은 또는 깊은 복사가 필요하다.

## 배열 복사

배열을 복사할때, map을 사용해서 복사하거나 복사를 하는 함수를 만들어 사용할 수 있다.

```javascript
const names = ["ko", "kim", "kang"];

const namesCopy = names.map((value) => value);

names.push("kwan");
console.log(names);
console.log(namesCopy);

function map(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}

const namesCopy2 = map(names, (value) => value);
```

## 얕은 복사

얕은 복사는 일차원 객체의 복사를 할 때 사용할 수 있다.

```javascript
const user = {
  name: "heyho",
  admin: false,
};

const me = Object.assign(user);

me.admin = true;

console.log(user.admin);
console.log(me.admin);
```

## 깊은 복사

깊은 복사는 이차원 이상의 객체, 배열을 복사할 때 필요하다.

> 참고
> [Explaining Value vs. Reference in Javascript](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)  
> [How to check if a variable is an object in JavaScript](https://attacomsian.com/blog/javascript-check-variable-is-object)
