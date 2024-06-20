// Duplicate Integer
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
//
//   Example 1:
//
// Input: nums = [1, 2, 3, 3]
//
// Output: true
// Example 2:
//
// Input: nums = [1, 2, 3, 4]
//
// Output: false


class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const uniq = new Set()
    for (let num of nums) {
      if (uniq.has(num)) {
        return true
      }
      uniq.add(num)
    }
    return false
  }
}


const testData = [
  {
    input: [1, 2, 3, 3],
    expected: true
  },
  {
    input: [1, 2, 3, 4],
    expected: false
  },
]

const solution = new Solution()

for (let {input, expected} of testData) {
  const output = solution.hasDuplicate(input)
  const result = output === expected ? 'Passed' : 'Failed'
  console.log('Input: ', input, 'Expected:', expected, 'Output:', output, result)
}