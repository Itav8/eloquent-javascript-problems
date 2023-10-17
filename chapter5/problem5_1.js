// Flattening
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((accum, currentArr) => accum.concat(currentArr), []))

// → [1, 2, 3, 4, 5, 6]
