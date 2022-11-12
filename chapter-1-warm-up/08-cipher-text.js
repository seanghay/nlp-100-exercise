export function cipher(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/c/gm, '219'); // actual ASCII code of 'c' is 99
}

console.log(cipher('I love this cat. Can you tell?'));

