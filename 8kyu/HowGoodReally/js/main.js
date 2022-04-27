function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  return ((classPoints.reduce((t, c) => t + c)) / classPoints.length) < yourPoints ? true : false
}