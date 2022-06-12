function SeriesSum(n){
    // 1/1+3
  arr = [1]
  if (n == 0){
    return (0.00.toFixed(2))
  }
  else{
  for (let i = 0; i < n-1; i++) {
    arr.push(1/(4+(3*i)))
  }
  console.log(arr);
  arr = arr.reduce((t , c) => t + (Math.floor(c*10000000) / 10000000), 0)
  console.log( (arr.toFixed(2)))
}
}
SeriesSum(5)