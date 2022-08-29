/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let y;
    nums.forEach(e => {
        if(nums.indexOf(e) == nums.lastIndexOf(e)){
            y = e
        }
    });
    return y
};