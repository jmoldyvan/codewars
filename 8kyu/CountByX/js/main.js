function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    let y = (x) * i;
    z.push(y)
  }
  return z;
}