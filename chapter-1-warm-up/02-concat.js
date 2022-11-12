const left = "shoe";
const right = "cold";
let result = '';

for (let i = 0; i < left.length; i++) {
  result += left[i] + (right[i] || "");
}

console.log(result)