// Two Integer Sum
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
//
//   You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
//
//   Return the answer with the smaller index first.
//
//   Example 1:
//
// Input:
//   nums = [3,4,5,6], target = 7
//
// Output: [0,1]
// Explanation: nums[0] + nums[1] == 7, so we return [0, 1].
//
//   Example 2:
//
// Input: nums = [4,5,6], target = 10
//
// Output: [0,2]
// Example 3:
//
// Input: nums = [5,5], target = 10
//
// Output: [0,1]
// Constraints:
//
//   2 <= nums.length <= 1000
//   -10,000,000 <= nums[i] <= 10,000,000
//   -10,000,000 <= target <= 10,000,000

class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {

    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], i)
    }


    for (let i = 0; i < nums.length; i++) {
      const secondNum = target - nums[i]
      const secondNumIndex = map.get(secondNum)
      if (map.has(secondNum) && secondNumIndex !== i) {
        if (secondNumIndex < i)
          return [secondNumIndex, i]
        else
          return [i, secondNumIndex]
      }
    }
    return []

  }
}

const testData = [
  {
    input: {nums: [3, 4, 5, 6], target: 7},
    expected: [0, 1]
  },
  {
    input: {nums: [4, 5, 6], target: 10},
    expected: [0, 2]
  },
  {
    input: {nums: [5, 5], target: 10},
    expected: [0, 1]
  },
]

const solution = new Solution()

for (let {input, expected} of testData) {
  const output = solution.twoSum(input.nums, input.target)
  const result = output[0] === expected[0] && output[1] === expected[1] ? 'Passed' : 'Failed'
  console.log('Input: ', input, 'Expected:', expected, 'Output:', output, result)
}
