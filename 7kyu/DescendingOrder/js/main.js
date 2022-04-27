<<<<<<< HEAD
function descendingOrder(n) {
  //...
  let x = Array.from(n.toString()).map(Number);
  let descend = x.sort((a, b) => b - a).join('')
  return +descend
=======
function descendingOrder(n) {
  //...
  let x = Array.from(n.toString()).map(Number);
  let descend = x.sort((a, b) => b - a).join('')
  return +descend
>>>>>>> ab797a2ef1ffb1728e4fd520a4d9b49cacd704ce
}