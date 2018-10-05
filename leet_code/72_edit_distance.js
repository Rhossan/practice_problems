var minDistance = function(word1, word2) {
  if (word1 === word2) return 0;
  if (word1.length === 0) return word2.length;
  if (word2.length === 0) return word1.length;
  let options = [];

  for (let i = 0; i < word1.length; i++) {
    let slicedWord = word1.slice(0, i) + word1.slice(i+1);
    options.push(1 + minDistance(slicedWord, word2));
  }
  for (let i = 0; i < word2.length; i++) {
    let slicedWord = word2.slice(0, i) + word2.slice(i+1);
    options.push(1 + minDistance(word1, slicedWord));
  }
  for(let i = 0; i < word1.length; i++) {
    for(let j = 0; j < word2.length; j++) {
      let sliced1 = word1.slice(0, i) + word1.slice(i+1);
      let sliced2 = word2.slice(0, j) + word2.slice(j+1);
      options.push(1 + minDistance(sliced1, sliced2));
    }
  }

  return Math.min(...options);
};
