var topKFrequent = function(nums, k) {
    
    let result = [];
    let groupnumsay;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
       if (nums[i - 1] !== nums[i]) {
          groupnumsay = [];
          result.push(groupnumsay);
       };
       groupnumsay.push(nums[i]);
    };
    result = result.sort((a,b) => b.length-a.length)
    result = result.slice(0,k).flat()
    console.log(result);
    result = [...new Set(result)]
    return result
};