// 주어진 문자열을 뒤집었을 때 원래 문자열과 똑같으면 true, 아니면 flase

function isPalindrome(str) {
  if (str.length === 0) return "";
  if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    isPalindrome(str.slice(1, -1));
  }
  return true;
  // add whatever parameters you deem necessary - good luck!
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
