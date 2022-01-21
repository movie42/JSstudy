export function assert(value, desc) {
  let li = document.createElement("li");
  li.className = value ? "pass" : "false";
  li.appendChild(document.createTextNode(desc));
  document.getElementById("result").appendChild(li);

  li.className == "pass"
    ? (li.style.color = "green")
    : (li.style.color = "red");
}
