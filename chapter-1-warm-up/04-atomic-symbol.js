const sentence = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can";
const words = sentence.split(/[\s\.]/).filter(Boolean);
const dict = Object.fromEntries(words.map((word, index) => {
  if ([1, 5, 6, 7, 8, 9, 15, 16, 19].includes(index + 1)) return [word.charAt(0), index]
  return [word.charAt(0) + word.charAt(1), index]
}))

console.log(dict)