function findEvenIndex(arr)
{
  let left = 0;
  let right = arr.reduce((s,n) => s + n, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (left === right) return i;
    left += arr[i];
  }
  return -1;
}


// function findEvenIndex(arr){
//     revArr = arr.reverse()
//     rightArr = []
//     leftArr = []
//     for (let i = 0; i < arr.length; i++) {
//         // all sum on right side
//         let sumR = arr.reduce((t,c) => (t) + (c), 0)
//         rightArr.push(sumR)
//     }
//     for (let i = 0; i < revArr.length; i++) {
//         // all sum on right side
//         let sumL = revArr.reduce((t,c) => t+c[i], 0)
//         leftArr.push(sumL)
//     }
//      console.log(rightArr);
//      console.log(leftArr);
// }
findEvenIndex([20,10,30,10,10,15,35])