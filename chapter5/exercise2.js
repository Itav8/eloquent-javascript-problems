// Your Own Loop
function loop(value, testFunc, updateFunc, bodyFunc) {
  for (let start = value; testFunc(start); start = updateFunc(start)) {
    bodyFunc(start)
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1
