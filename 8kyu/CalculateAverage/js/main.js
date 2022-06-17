function find_average(array) {
    let sum = array.reduce((t,c) => t + c , 0)
    return array.length == 0 ? 0 : sum/array.length;
  }