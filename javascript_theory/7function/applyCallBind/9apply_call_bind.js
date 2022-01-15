// apply, call

function say(greeting, honorifics) {
  console.log(`${greeting}, ${honorifics} ${this.name}`);
}

const gilgamesh = { name: "Gilamesh" };
const enkidu = { name: "Enkidu" };

say.apply(gilgamesh, ["Hello", "Mr"]);
say.apply(enkidu, ["안녕", "길가메시 친구"]);
say.call(gilgamesh, "Hello", "Mr");
say.call(enkidu, "안녕", "길가메시 친구");

// bind

const sayToGilgamesh = say.bind(gilgamesh);
sayToGilgamesh("Hello", "Mr");
