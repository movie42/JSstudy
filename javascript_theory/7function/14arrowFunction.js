const obj = {
  say: function () {
    console.log(this);
    const f = function () {
      console.log("f", this);
    };
    f();
    const a = () => console.log("g", this);
    a();
  }
};
obj.say();
