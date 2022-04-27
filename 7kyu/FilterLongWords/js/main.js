function filterLongWords(sentence, n) {
  //Solution here
  let newarr = sentence.split(' ');
  let lmoa = newarr.filter(x => x.length > n)
  return lmoa
}