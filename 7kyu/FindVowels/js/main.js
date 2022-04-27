function vowelIndices(word) {
  vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'];
  result = []
  for (var i = 0; i < word.length; i++) {
    if (vowels.indexOf(word[i]) != -1) {
      result.push(i + 1);
    }
  }
  return result;
}