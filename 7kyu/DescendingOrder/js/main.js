function descendingOrder(n) {
  //...
  let x = Array.from(n.toString()).map(Number);
  let descend = x.sort((a, b) => b - a).join('')
  return +descend
}