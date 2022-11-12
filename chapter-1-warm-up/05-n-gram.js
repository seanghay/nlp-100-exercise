export function bigram(input, sep = ' ') {
  if (typeof input === 'string') input = input.split(/\s/).filter(Boolean);
  if (!Array.isArray(input)) return [];
  const chunks = [];
  for (let i = 0; i < input.length; i += 2) { 
    chunks.push(input.slice(i, i+ 2).join(sep));
  }
  return chunks;
}

const result = bigram("I am an NLPer")
console.log(result);  

