function anagrams(word, words) {
    const sort = (word) => word.split('').sort().join('');
    
      let token = sort(word);
      let total = []
    
      for (let x = 0; x < words.length; x++) {
        if (sort(words[x]) === token) {
          total.push(words[x])
        }    
      }
      
      return total
    }
    