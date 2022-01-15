# this, apply call, bind

## this

자바스크립트의 this는 실행 컨텍스트에 따라 결정된다.

[9apply_call_bind](9apply_call_bind.js)

## apply(), call()

- this 값과 함수의 인수를 사용하여 함수를 실행하는 메서드다. apply와 call의 동작은 본질적으로 같다. 함수를 넘기는 방법이 다르다.
- 실행중인 함수의 argument를 apply에 넘겨도 실행이 가능하다.

```javascript
function say(greeting, honorifics) {
  console.log(`${greeting}, ${honorifics} ${this.name}`);
}

const gilgamesh = { name: "Gilgamesh" };
const enkidu = { name: "Enkidu" };

say.apply(gilgamesh, ["Hello", "Mr"]);
say.apply(enkidum, ["안녕", "길가메시 친구"]);
say.call(gilgamesh, "Hello", "Mr");
say.call(enkidum, "안녕", "길가메시 친구");
```

## bind()

- 객체에 함수를 바인드한다.

```javascript
const sayToGilgamesh = say.bind(gilgamesh);
sayToGilgamesh("Hello", "Mr");
```
