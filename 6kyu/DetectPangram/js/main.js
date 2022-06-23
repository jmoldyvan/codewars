function isPangram(string){
    let string1 = new Set(string.toLowerCase().replace(/[^a-z]/g, ''))
    console.log(string1);
    return (string1.size === 26? true : false)
  }

  isPangram("This is not a pangram.")