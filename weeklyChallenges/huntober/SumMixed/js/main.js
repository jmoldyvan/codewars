// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.


//  taking in array of mixed str and num
// empty no, always str and num, 1d array, 
// return sum as num

function sumMix(mixedArr) {

    let allNum = mixedArr.map((x) => +x)
    
    console.log(allNum.reduce((t,c) => t+c))
    return allNum.reduce((t,c) => t+c)
      
}
    


assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 