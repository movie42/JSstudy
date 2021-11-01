# 객체

## 객체를 생성

### 생성

1. 객체 리터럴

```javascript
const user = { name: "iron", age: 23 };
```

2. 생성자 생성

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user = new User("iron", 23);
```

3. Object.create

```javascript
const user = Object.create(Object.prototype, {
  name: {
    value: "iron",
    writable: true,
    enumerable: true,
    configurable: true
  }
});
```

### 프로토 타입

#### 생성자 안에서 메서드를 정의하는 방식의 문제점

- this 뒤에 메서드를 정의하면 그 생성자로 생성한 모든 인스턴스에 똑같은 메서드가 추가된다.
- 메서드를 포함한 인스턴스를 여러 개 생성하면 같은 작업을 하는 메서드를 인스턴스 개수만큼 생성하게 되며 **결과적으로 그만큼의 메모리를 소비하게 된다.**
- 프로토타입 객체에 메서드를 정의하는 방식으로 해결할 수 있다.

#### 프로토타입 객체

- 자바스크립트에서는 함수도 객체이기 때문에 prototype 프로퍼티를 갖고 있다.
- prototype 프로퍼티가 가리키는 객체를 그 함수의 프로토타입 객체라고 한다.
- 기본적으로 빈 객체를 가리킨다.
- 프로토타입 객체의 프로퍼티는 생성자로 생성한 모든 인스턴스에서 그 인스턴스의 프로퍼티처럼 사용 가능
- 프로토타입 객체의 프로퍼티는 읽기만 가능하고 수정이 불가능하다.
- 메모리 낭비를 피할 수 있다.

```javascript
// prototype
function F() {}
console.log(F.prototype);

F.prototype.prop = function (name, age) {
  return { name, age };
};

const obj = new F();
obj.prop("ko", 23);

obj.prop = function (address) {
  return { address };
};
```

#### 메서드 체인

```javascript
// 객체.메서드1().메서드2().메서드3()...;

balls[i].setVelocityAsRandom(2, 7).setColorAsRandom(50, 255);
```
