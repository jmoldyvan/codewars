var productExceptSelf = function(nums) {
    let y = [];
    let left = 1;
    let right = 1;
    for(let i=0;i<nums.length;i++){
        y[i] = left;
        left = left*nums[i];
    }

    for(let i=nums.length-1;i>=0;i--){
        y[i] = right*y[i];
        right = right*nums[i];
    }
    return y;
};

productExceptSelf([-1,-1,1,-1,-1,1,-1,-1,-1,1,1,-1,1,1,1])