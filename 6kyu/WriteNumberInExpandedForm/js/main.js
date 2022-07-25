function expandedForm(num) {
    num = num.toString().split('').reverse()
    newNum = num.map((x,i) => +x*(10**i))
    newNum = newNum.reverse().filter((x) => x!==0)
    newNum = newNum.map(String) 
    newNum = newNum.join(' + ')
    console.log(newNum);
    return newNum
  }