function stray(numbers) {
    let newArr = [...new Set(numbers)]
    let x = newArr[0]
    let y = newArr[1]
    let xLength = (numbers.filter(www => www==x)).length
    let yLength = (numbers.filter(www => www==y)).length
    return (xLength > yLength ? y:x);
  }

  stray([3, 17, 17, 17, 17, 17, 17])