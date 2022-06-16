function find_average(array) {
    let sum = array.reduce((t,c) => t + c , 0)
    return (sum/array.length);
  }