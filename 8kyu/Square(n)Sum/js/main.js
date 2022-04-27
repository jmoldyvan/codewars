function squareSum(numbers) {
  return (numbers.reduce((t, c) => t + (c ** 2), 0))
}