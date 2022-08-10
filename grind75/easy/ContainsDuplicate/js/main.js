let containsDuplicate = (nums) => {
    const noDupe = [...new Set(nums)];

  return nums.length == noDupe.length ? true : false;
};

containsDuplicate([2,14,18,22,22])
