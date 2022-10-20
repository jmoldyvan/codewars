// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. 
// Your task will be to return the sum of the numbers that occur only once.
// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.
// take in array, nums
// return sum of non duplicates

function repeats( array ){

    hash = {}
    let newArr = 0

    for (let i = 0; i < array.length; i++) {
        if(hash[array[i]]){
            newArr= newArr-array[i]
            hash[array[i]]=0
        }
        else{
            hash[array[i]] = array[i]
            newArr= newArr+hash[array[i]]
             
        }
    }
    console.log(hash);
    console.log(newArr);
}



repeats([4,5,7,5,4,8])//,15)
repeats([9, 10, 19, 13, 19, 13])//,19)
repeats([16, 0, 11, 4, 8, 16, 0, 11])//,12)
repeats([5, 17, 18, 11, 13, 18, 11, 13])//,22)
repeats([5, 10, 19, 13, 10, 13])//,24)