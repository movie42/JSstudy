var a = "out_a";
{
  var a = "inner a";
  console.log(a);
}

console.log(a);

let b = "out b";

{
  let b = "inner b";
  console.log(b);
}

console.log(b);
