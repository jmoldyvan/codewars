function gimme(triplet) {
  let xxx = triplet.slice().sort((a, b) => a - b);
  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] == xxx[1]) {
      return (i)
    }
  }
}