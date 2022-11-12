/** 
 * @param {string} str 
 * @returns {string}
 */
function typoglycemia(str) {
  const words = str.split(/\s/);
  
  const collections = [];
  for (const word of words) {
    if (word.length < 4) {
      collections.push(word);
      continue
    };

    const shuffled = shuffle(word.substring(1, word.length - 1).split('')).join('');
    const newWord = word[0] + shuffled + word[word.length - 1];
    collections.push(newWord);
  }

  return collections.join(' ');
}


// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


const result = typoglycemia("I couldn’t believe that I could actually understand what I was reading : the phenomenal power of the human mind ");
console.log(result)