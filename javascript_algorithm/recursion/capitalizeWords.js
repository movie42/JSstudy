let words = ["i", "am", "learning", "recursion"];

function capitalizedWords(values) {
  let result = [];
  if (values.length > 0) {
    result.push(values[0].toUpperCase());
    result = result.concat(capitalizedWords(values.slice(1)));
  }
  return result;
}

console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
