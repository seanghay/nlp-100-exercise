import { bigram } from './05-n-gram.js';

const x = new Set(bigram("paraparaparadise".split(''), ''))
const y = new Set(bigram("paragraph".split(''), ''))

const union = new Set([...x, ...y]);
const intersect = new Set([...x].filter(gram => y.has(gram)))

console.log({
  x,
  y,
  union,
  intersect,
  "has se in the union": union.has('se')
})