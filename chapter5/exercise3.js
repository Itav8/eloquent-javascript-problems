// Everything
function every(array, test) {
  for (const ele of array) {
    if (!test(ele)) {
      return false
    }
  }
  return true
}

function every2(array, predicate) {
  return array.some(ele => !predicate(ele))
}

console.log(every([1, 3, 5], (n) => n < 10));
// → true
console.log(every([2, 4, 16], (n) => n < 10));
// → false
console.log(every([], (n) => n < 10));
// → true
