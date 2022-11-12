const sentence = "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics";
const words = sentence.split(/[\s\,]/)
  .filter(Boolean)
  .map(it => [it, it.length]);

console.log(words)
console.log(Object.fromEntries(words.sort((a, b) => a[1] - b[1])))
