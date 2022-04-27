<<<<<<< HEAD
function getCount(str) {
  let vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let yoyo = str.split('')
  let intersect = yoyo.filter(Element => vowels.includes(Element));
  intersect.forEach(element => {
    vowelsCount += 1
  });
  return vowelsCount;
}
// enter your majic here


=======
function getCount(str) {
  let vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let yoyo = str.split('')
  let intersect = yoyo.filter(Element => vowels.includes(Element));
  intersect.forEach(element => {
    vowelsCount += 1
  });
  return vowelsCount;
}
// enter your majic here


>>>>>>> ab797a2ef1ffb1728e4fd520a4d9b49cacd704ce
console.log(getCount('abracadabra'))