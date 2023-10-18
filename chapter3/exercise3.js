// Bean Counting
function countBs(str) {
  let count = 0
  for (const ele of str) {
    if (ele === "B") {
      count++
    }
  }
  return count
}

function countChar(str) {
  let count = 0;
  for (const ele of str) {
    if (ele === "k") {
      count++;
    }
  }
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
