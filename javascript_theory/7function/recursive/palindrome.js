function isPalindrome(text) {
  if (text.length <= 1) return true;
  if (text.charAt(0) != text.charAt(text.length - 1)) return false;
  return isPalindrome(text.slice(1, text.length - 2));
}

// console.log(isPalindrome("abmba"));

let objs = {
  chirp: function (n) {
    return n > 1 ? objs.chirp(n - 1) + "-chrip" : "chrip";
  },
};

// console.log(objs.chirp(3));

// 참조가 사라지는 문제
let objs2 = {
  chirp: function (n) {
    return n > 1 ? this.chirp(n - 1) + "-chrip" : "chrip";
  },
};

let objs3 = { chirp: objs2.chirp };
objs2 = {};

// console.log(objs3.chirp(3));

let objs4 = {
  chirp: function signal(n) {
    return n > 1 ? signal(n - 1) + "-chirp" : "chirp";
  },
};

let objs5 = { chrip: objs4.chirp };

objs4 = {};

const store = {
  nextId: 1,
  cache: {},
  add: function (fn) {
    if (!fn.id) {
      fn.id = store.nextId++;
      return !!(store.cache[fn.id] = fn);
    }
  },
};

function testAdd() {}
// console.log(store.add(testAdd));
// console.log(store.cache);

function isPrime(value) {
  if (!isPrime.answer) isPrime.answer = {};
  if (isPrime.answer[value] != null) {
    return isPrime.answer[value];
  }

  let prime = value != 1;
  for (let i = 2; i < value; i++) {
    if (value % i == 0) {
      prime = false;
      break;
    }
  }
  return (isPrime.answer[value] = prime);
}

// console.log(isPrime(10));

function smallest(array) {
  return Math.min.apply(Math, array);
}

function largest(array) {
  return Math.max.apply(Math, array);
}

// console.log(smallest([1, 2, 3, 4, 5]));
// console.log(largest([1, 2, 3, 4, 5]));

function merge(root) {
  for (let i = 1; i < arguments.length; i++) {
    for (let key in arguments[i]) {
      root[key] = arguments[i][key];
    }
  }
  return root;
}

const merged = merge({ name: "jo" }, { city: "seoul" });

function multiMax(multi) {
  return multi * Math.max.apply(Math, Array.prototype.slice.call(arguments, 1));
}

// console.log(multiMax(2, 10, 29, 88, 3, 4, 255));

let users = {
  values: ["Dean Edwards", "Sam Stephenson", "Alex Russell"],
};

function addMethod(obj, name, fn) {
  let old = obj[name];
  obj[name] = function () {
    if (fn.length == arguments.length) {
      return fn.apply(this, arguments);
    } else if (typeof old == "function") {
      return old.apply(this, arguments);
    }
  };
}

addMethod(users, "find", function () {
  return this.values;
});

addMethod(users, "find", function (name) {
  let user = [];
  for (let i = 0; i < this.values.length; i++) {
    if (this.values[i].indexOf(name) == 0) {
      user.push(this.values[i]);
    }
  }
  return user;
});

addMethod(users, "find", function (first, last) {
  let user = [];
  for (let i = 0; i < this.values.length; i++) {
    if (this.values[i] == `${first} ${last}`) {
      user.push(this.values[i]);
    }
  }
  return user;
});

// console.log(users.find());
// console.log(users.find("Dean"));
// console.log(users.find("Sam", "Stephenson"));
