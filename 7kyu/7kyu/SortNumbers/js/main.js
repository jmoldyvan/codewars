function solution(nums) {
  if (nums === null) {
    return nums = []
  }
  else if (nums.length < 1) {
    return nums = []
  }

  else {
    return nums.sort((a, b) => a - b)
  }
}