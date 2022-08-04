# 객체 생성자

## 생성자로 객체 생성하기

> [예제](constructor_example.js)

```javascript
function User(name, age){
    this.name = name;
    this.age = age;
}

const user1 = new User('GOGO', 22)

console.log(user1)
```

### 생성자 

- new 연산자로 객체를 생성할 것이라 기대하고 만든 함수를 생성자라고 부른다.
- 생성자로 생성한 객체를 그 생성자의 인스턴스라고 부른다. 하지만 자바스크립트에는 클래스가 없다.([그럼 class는 뭔데???](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)) 엄밀히 말하면 인스턴스가 아니지만 그냥 인스턴스라고 부른다.

### 생성자의 역할

- 이름은 같지만 프로퍼티의 값이 다른 객체 여러개를 효율적으로 생성할 수 있다. 

## 메서드를 가진 생성자

- this.프로퍼티 이름에 함수의 참조를 대입하면 메서드를 정의할 수 있다. 이때 메서드 함수 안에 있는 this는 생성될 인스턴스를 가르킨다.
- 메서드 함수 안에서 this를 사용하면 그 값이 인스턴스의 프로퍼티임을 명시할 수 있다.

```javascript
function Circle(center, radius){
    this.center = center;
    this.radius = radius;
    this.area = function(){
        return Math.PI * this.radius * this radius;
    }
}

const center = {x:0, y:0}
const circle1 = new Circle(p, 2.0);
console.log(circle1.area())
```


