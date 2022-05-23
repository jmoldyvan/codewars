function findOutlier(integers){
    let even = integers.filter((x) => x % 2 === 0); 
    let odd = integers.filter((x) => x % 2 !== 0); 
    return +((even.length > odd.length ? odd:even).toString())
  }