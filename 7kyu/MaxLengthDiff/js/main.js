<<<<<<< HEAD
function mxdiflg(a1, a2) {
  if (a1.length == 0 || a2.length == 0) return -1;
  return Math.max(Math.max(...a1.map(x => x.length)) - Math.min(...a2.map(x => x.length)), Math.max(...a2.map(x => x.length)) - Math.min(...a1.map(x => x.length)))
=======
function mxdiflg(a1, a2) {
  if (a1.length == 0 || a2.length == 0) return -1;
  return Math.max(Math.max(...a1.map(x => x.length)) - Math.min(...a2.map(x => x.length)), Math.max(...a2.map(x => x.length)) - Math.min(...a1.map(x => x.length)))
>>>>>>> ab797a2ef1ffb1728e4fd520a4d9b49cacd704ce
}