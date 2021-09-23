function reverse(str) {
  if (str.length === 0) return "";
  let result = reverse(str.slice(1)) + str[0];
  return result;
}

console.log(reverse("awesome")); // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
