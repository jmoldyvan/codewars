var maxSequence = function(nums){
    if(nums.length<1){
      return 0
    }
      for (let i = 1; i < nums.length; i++){
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    return Math.max(...nums)<0 ? 0 : Math.max(...nums);
}