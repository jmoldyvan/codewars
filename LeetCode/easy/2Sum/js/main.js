// array of num, all num, no empty, at least 2 nums && a single num that 2 in the array add up to
// return array of indexes of the the 2 nums that add to the target

function twoSum(array,target){
    numI={}

for (let i = 0; i < array.length; i++) {
    diff = target - array[i]
    if(numI[diff] !== undefined){
        return [i,numI[diff]]
    }
    else{
        numI[array[i]] = i
    }
}


}

twoSum([2,7,11,15], 9) //[0,1]
twoSum([3,2,4], 6) //[1,2]
twoSum([5,5,6,7,9,89], 13) //[2,3]
twoSum([1,1,1,1,34,1,1,1,5], 39) //[4,8]




























    // for (let i = 0; i < arr.length; i++) {
    //     let diff = target - arr[i]
    //     if(numsI[diff] !== undefined && numsI[diff] !== i){
    //         return [i, numsI[diff]]
    //     }
    //     else{
    //         numI[arr[i]] = i
    //     }
    // }