function countSheep(num){
  let result = ''
  console.log(num);
  for(i=1;i<=num;i++){
    result = result + `${i} sheep...`
  }
  return num === 0 ? '' : result
}