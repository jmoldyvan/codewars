function invert(yyy) {
  let xxx = yyy
  xxx.forEach((x, i) => {
    if (xxx[i] > 0) {
      xxx[i] *= (-1)
    }
    else if (xxx[i] <= 0) {
      xxx[i] = -xxx[i]
    }
  });
  return (yyy, xxx)
}