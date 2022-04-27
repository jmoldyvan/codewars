<<<<<<< HEAD
let number = function (busStops) {
  // Good Luck!
  let y = []
  busStops.forEach(arr => {
    let x = (arr[0] - arr[1])
    y.push(x)
  });
  return (Math.abs(y.reduce((t, c) => t - c, 0)))
=======
let number = function (busStops) {
  // Good Luck!
  let y = []
  busStops.forEach(arr => {
    let x = (arr[0] - arr[1])
    y.push(x)
  });
  return (Math.abs(y.reduce((t, c) => t - c, 0)))
>>>>>>> ab797a2ef1ffb1728e4fd520a4d9b49cacd704ce
}