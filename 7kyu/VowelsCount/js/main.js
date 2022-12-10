// 2023
function getCount(str) {
  let vowels = str.split('').filter((x) => ['a', 'e', 'i', 'o', 'u'].includes(x))
  return vowels.length;
}




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


console.log(getCount('abracadabra'))