// 여러개의 내부 상태와 메서드를 가진 클로저
console.log("여러개의 내부 상태와 메서드를 가진 클로저");

function Person(name, age) {
  let _name = name;
  let _age = age;
  return {
    getName: function () {
      return _name;
    },
    getAge: function () {
      return _age;
    },
    setAge: function (x) {
      _age = x;
    }
  };
}

const person = Person("Js", 18);
console.log(person.getName());
console.log(person.getAge());
person.setAge(20);
console.log(person.getAge());

// 함수 팩토리
console.log("함수 팩토리");

function makeMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const multi2 = makeMultiplier(2);
const multi10 = makeMultiplier(10);

console.log(multi2(3));
console.log(multi10(3));

//모듈 패턴

const Module = {};

(function (_Module) {
  let name = "unknown";

  function getName() {
    return name;
  }

  _Module.showName = function () {
    console.log(getName());
  };

  _Module.setName = function (_name) {
    name = _name;
  };
})(Module);

Module.setName("Gilgamesh‎");
Module.showName();
