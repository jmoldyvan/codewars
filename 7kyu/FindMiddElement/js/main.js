<<<<<<< HEAD
function gimme(triplet) {
  let xxx = triplet.slice().sort((a, b) => a - b);
  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] == xxx[1]) {
      return (i)
    }
  }
=======
function gimme(triplet) {
  let xxx = triplet.slice().sort((a, b) => a - b);
  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] == xxx[1]) {
      return (i)
    }
  }
>>>>>>> ab797a2ef1ffb1728e4fd520a4d9b49cacd704ce
}