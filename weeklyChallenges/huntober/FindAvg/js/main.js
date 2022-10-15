
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

// array of all num, no empty, regular old 1d array with nums
// return the average, single num

function getAvg(studentArr){

    arrSum = studentArr.reduce((t,c) => t+c)
    console.log(Math.floor(arrSum/studentArr.length))
      return Math.floor(arrSum/studentArr.length)
    }
    function getAvg(studentArr){
    
    arrSum = studentArr.reduce((t,c) => t+c)
    console.log(Math.floor(arrSum/studentArr.length))
      return Math.floor(arrSum/studentArr.length)
    }
    
    
    getAvg([2,5,7,89,45])
    getAvg([8,8,8,4,23])
    getAvg([234,7,45,5,66,78,6,7,56,7,5,675,65,65,65,65,65,656,56,5,6])
    getAvg([2,2,2,2])//,2)
    getAvg([1,2,3,4,5,])//,3);
    getAvg([1,1,1,1,1,1,1,2])//,1)