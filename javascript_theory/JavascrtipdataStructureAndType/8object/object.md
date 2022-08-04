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

## 프로토타입 상속

- 자바스크립트는 프로토타입 상속에 기반을 둔 객체 지향 언어다.

### 상속

자바스크립트에서는 클래스가 없다. 객체를 상속한다. 자바스크립트의 상속은 프로토타입 체인이라고 부르는 객체의 자료구조로 구현되어있다.생성자가 클래스 역할을 하지만 생성자를 상속하기 위한 구문을 언어 차원에서 제공하지 않는다.

### 상속하는 이유

메서드 코드의 재사용, 유지 보수성이 높아짐.

### 프로토타입 체인

#### 내부 프로퍼티 [[Prototype]]

- 모든 객체는 내부 프로퍼티 [[Prototype]]을 가지고 있다.
- 이것은 함수 객체의 prototype 프로퍼티와 다른 객체다.

```javascript
// __proto__프로퍼티에 [[Prototype]]의 값이 저장된다.
const obj = {};
console.log(obj.__proto__);
```

- 객체의 \_\_proto\_\_ 프로퍼티는 그 객체에게 상속을 해 준 부모 객체를 가리킨다. 따라서 \_\_proto\_\_ 프로퍼티가 가리키는 부모 객체의 프로퍼티를 사용할 수 있다.

```javascript
// __proto__ 프로퍼티를 사용한 연결고리로 묶여있다.
const objA = {
  name: "JAVA",
  outPut: function () {
    console.log(this.name);
  }
};
const objB = {
  name: "SCRIPT"
};

objB.__proto__ = objA;
const objC = {};

objC.__proto__ = objB;
objC.outPut();
```

- objC.outPut()이 없지만 실행되는 이유는 objC.\_\_proto\_\_에서 prototype을 거슬러 올라가서 objA에서 outPut()을 찾아 실행시키기 때문이다. 이와 같은 객체 연결 고리를 프로토타입 체인이라고 한다.
- 객체의 \_\_proto\_\_ 프로퍼티가 가리키는 객체가 상속을 해 준 객체이고 이 객체를 그 객체의 프로토타입이라고 한다. 객체는 자신이 가지고 있지 않은 특성(프로퍼티와 메서드)를 프로토타입 객체에 위임한다고 할 수 있다.
- 프로토타입 상속을 하는 객체 지향 언어를 가리켜 프로토타입 기반 객체 지향 언어라고 한다.
- 프로그래밍을 할때 \_\_proto\_\_ 프로퍼티 값을 직접 입력해서 상속하지 않는다.

일반적으로 상속하는 방법

- 생성자로 객체를 생성할 때 생성자의 prototype 프로퍼티에 추가하는 방법
- Object.create 메서드로 상속을 받을 프로토타입을 지정하여 객체를 생성

#### 프로토타입 가져오기

객체의 프로토타입은 Object.getPrototypeOf 메서드로 가져올 수 있다.

```javascript
console.log(Object.getPrototypeOf(obj));
```

더 읽어보기

[상속과 프로토타입](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

### new 연산자의 역할

생성자를 new로 호출해서 인스ㅓㄴ스를 생성하면 내부적으로 어떤 작업을 할까?

```javascript
// p.347
function Circle(center, radius) {
  this.center = center;
  this.radius = radius;
}

Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};

// new 연산자 사용해서 인스턴스 생성하기
const c = new Circle({ x: 0, y: 0 }, 2.0);

// 내부적으로는 어떤일이?
// 1. 빈 객체 생성

var newObj = {};

// 2. Circle.prototype을 생성된 객체의 프로토타입으로 설정
// 이때 Circle.prototype이 가리키는 값이 객체가 아니라면 Object.prototype을 프로토타입으로 설정한다.

newObj.__proto__ = Circle.prototype;

// 3.Circle 생성자 실행하고 newObj를 초기화한다. 이때 this는 1로 생성한 객체로 설정한다.인수는 new 연산자와 함께 사용한 인수를 그대로 사용

Circle.apply(newObj, arguments);

// 4. 완성된 객체를 결과값으로 반환

return newObj;
```

2에서 prototype 프로퍼티 값을 인스턴스의 \_\_proto\_\_ 프로퍼티 값으로 대입하여 인스턴스의 프로토타입 체인이 정의되고, 생성자로 생성한 모든 인스턴스가 생성자의 프로토타입 객체의 프로퍼티를 사용할 수 있게 된다.

### 프로토타입 객체의 프로퍼티

함수를 정의하면 함수 객체는 기본적으로 prototype 프로퍼티를 갖는다. 이 prototype 프로퍼티는 프로토타입 객체를 가리키고, 이 객체는 constructor 프로퍼티와 내부 \[\[Prototype\]\](\_\_proto\_\_)를 가지고 있다.

#### constructor 프로퍼티

constructor 프로퍼티는 함수 객체의 참조를 값으로 가지고 있다.

```javascript
function C() {}
console.log(C.prototype.constructor);
```

- 생성자의 prototype 프로퍼티가 '프로토타입 객체'를 가리킨다. 프로토타입 객체의 constructor 프로퍼티가 생성자를 가리킨다.
- 생성자로 생성한 인스턴스는 생성 될 때의 프로토타입 객체의 참조만 가지고 있을 뿐, 생성자와는 직접적인 연결고리가 없다.

```
C =  prototype  => C.prototype
  <= constructor =

C = new로 생성 => F의 인스턴스 = [[Prototype]] 또는 __proto__ => C.prototype
```

- 인스턴스는 프로토타입에서 constructor를 상속받기 때문에 이 값을 확인하면 어떤 생성자로 생성한것인지 알 수있다.

#### 내부 프로퍼티 \[\[Prototype]]

- 함수 객체가 가진 프로토타입 객체의 내부 프로퍼티 \[\[Prototype]]는 기본적으로 Object.prototype을 가리킨다. 그래서 생성자로 생성한 인스턴스에서 Object.prototype의 프로퍼티를 사용할 수 있다.

#### 프로토타입 객체의 교체 및 constructor 프로퍼티

- 프로퍼티만 정의되어있는 새로운 객체를 prototype 프로퍼티 값으로 대입하면 인스턴스와 생성자 사이의 연결고리가 끊어지기 때문에 constructor 프로퍼티를 정의하고, 그 프로퍼티에 생성자의 참조를 대입해야한다.

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype = {
  address: function () {
    return `${this.name}은 ${this.age}입니다.`;
  }
};
```

더 읽어보기

- 책보다 이 문서가 더 잘 이해됨...

[함수의 prototype 프로퍼티](https://ko.javascript.info/function-prototype#ref-766)
