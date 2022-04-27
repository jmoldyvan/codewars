function digitize(n) {
  //code here
  let y = [];
  let x = n.toString();
  x = x.split('')
  for (let i = 0; i < x.length; i++) {
    y.push(+(x[i]));
  }
  y = y.reverse()
  return y
}