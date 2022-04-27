function eachCons(array, n) {
  let w = []
  for (let i = 0; i < array.length; i++) {
    w.push(array.slice(i, i + n));
  }
  return w.filter(e => e.length === n);
}