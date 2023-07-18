// Given an array of integers nums which is sorted 
// in ascending order, and an integer target, write a 
// function to search target in nums. If target exists
// , then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


var search = function(nums, target) {


};





























































var search = function(nums, target) {
    // we set out variables, the lowest and highest
    // int since this is a ordered list least ot greatest
    let lo = 0, hi = nums.length-1;

    while (lo < hi) {
        // here we use floor to find the middle number, median
        let mid = lo + Math.floor((hi-lo+1)/2);
        // once we have the middle number, we use the following if statement
        // to determine if the target is less or greater than our mid
        // if less than, then our greatest number becomes one less than middle
        // creating a new list with it as the top most number
        if (target < nums[mid]) {
            hi = mid - 1
        // if target is greater, than we dont need anthing to the left, less than,
        // the mid and use that as out lowest for the next isteration
        } else {
            lo = mid; 
        }
    }
    return nums[lo]==target?lo:-1;
};
var search = function(nums, target) {
    let lo = 0, hi = nums.length-1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi-lo+1)/2);
        if (target < nums[mid]) {
            hi = mid - 1
        } else {
            lo = mid; 
        }
    }
    return nums[lo]==target?lo:-1;
};