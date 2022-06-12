function reverseWords(str) {
    str = str.split(' ')
    console.log(str);
    result = str.map((e) => Array.from(e).reverse().join(''))
    return result.join(' ')
  }

  reverseWords('The quick brown fox jumps over the lazy dog.')