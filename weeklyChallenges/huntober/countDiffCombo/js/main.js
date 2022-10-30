// taking in 2d array
// give back number of uniquer arrays formed


function solve(arr) {

 let newArr = arr.map((x) => [...new Set(x)])

    console.log(newArr.reduce((t,c) => t * c.length, 1));
    return newArr.reduce((t,c) => t * c.length, 1)
  };



solve([[1,2],[4],[5,6]]) //,4
solve([[1,2],[4,4],[5,6,6]])//,4
solve([[1,2],[3,4],[5,6]])//,8
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]])//,72