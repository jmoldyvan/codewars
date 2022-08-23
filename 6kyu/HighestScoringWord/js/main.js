let key = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
  "w", "x", "y", "z"
];

function wordScore(word) {
  let score = 0;
  for (let j = 0; j < word.length; j++) {
    let char = word[j];
    score += (key.indexOf(char) + 1);
  }
  return score;
}

function high(x) {
  let bestWord = "";
  let bestScore = 0;
  words = x.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let score = wordScore(word);
    if (score > bestScore) {
      bestScore = score;
      bestWord = word;
    }
  }
  return bestWord;
}