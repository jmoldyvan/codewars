function divisors(integer) {
    arr = []
  for(let i = 2; i < integer; i++){
      if((integer / i) % 1 === 0){
        arr.push(i)
      }
  }
  return (arr.length > 0 ? arr:`${integer} is prime`)
};