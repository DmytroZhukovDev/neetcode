// 128. Longest Consecutive Sequence
// Medium
// Topics
// Companies
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
//
//   You must write an algorithm that runs in O(n) time.
//
//
//
//   Example 1:
//
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:
//
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
//
//
// Constraints:
//
//   0 <= nums.length <= 105
//   -109 <= nums[i] <= 109


function longestConsecutive(nums: number[]): number {
  const set = new Set(nums)
  let max = 0

  for (let i = 0; i < nums.length; i++) {
    /// find the first element in consecutive
    if (!set.has(nums[i] - 1)) {
      let localMax = 1
      let next = nums[i] + 1
      while (set.has(next)) {
        localMax++
        next++
      }
      max = Math.max(localMax, max)
    }
  }
  return max
}

const testData = [
  {
    input: [100, 4, 200, 1, 3, 2],
    expected: 4
  },
  {
    input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
    expected: 9
  },
]


for (let {input, expected} of testData) {
  const output = longestConsecutive(input)
  const result = output === expected ? 'Passed' : 'Failed'
  console.log('Input: ', input, 'Expected:', expected, 'Output:', output, result)
}
