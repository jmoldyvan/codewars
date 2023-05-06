/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Given an integer array nums, return true if any value appears 
// at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(!hash[element]){
           hash[element]=+ 1; 
        }
        else{
            console.log(false);
            break
        }
        console.log(hash);
        
    }
    console.log(true);
};