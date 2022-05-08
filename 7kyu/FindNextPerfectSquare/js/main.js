function findNextSquare(sq) {
    if(Math.sqrt(sq) % 1 == 0){
    let x = Math.ceil(Math.sqrt(sq))
    x++
    return (x**2)
  }
  else{
      return -1
  }
}

  findNextSquare(121)