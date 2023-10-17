// Dominant Writting Direction
function dominantDirection(text) {
  // Initialize an array called 'counted' using the 'countBy' function.
  let counted = countBy(text, (char) => {
    // For each character in the 'text', determine its script (writing system)
    // and retrieve its direction (ltr, rtl, or none).
    let script = characterScript(char.codePointAt(0));
    // If the script exists, return its direction; otherwise, return "none".
    return script ? script.direction : "none";
    // Filter out entries with direction "none".
  }).filter(({ name }) => name != "none");
  // If there are no entries left after filtering, assume "ltr" as the default direction.
  if (counted.length == 0) return "ltr";
  
  // Reduce the 'counted' array to find the entry with the highest count.
  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
