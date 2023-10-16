// A list
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}
// { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }
function listToArray(obj) {
  const array = [];

  let current = obj;

  while (current !== null) {
    array.push(current.value);
    current = current.rest;
  }

  return array;
}

function prepend(num, list) {
  return { value: num, rest: list };
}

function nth(list, index) {
  let i = 0;
  let current = list;

  while (current !== null) {
    if (i === index) {
      return current.value;
    }

    current = current.rest;
    i++;
  }

  return null;
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20
