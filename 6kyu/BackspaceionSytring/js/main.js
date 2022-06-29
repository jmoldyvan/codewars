function cleanString(s) {
    s=s.split``
    let arr = []
    
    s.forEach(char => {
      if (char != '#') {
      arr.push(char)    
    } else {
      arr.pop()
    }
    })
    
    return arr.join('')
}

cleanString('abc#d##c')