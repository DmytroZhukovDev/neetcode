// 238. Product of Array Except Self
// Medium
// Topics
// Companies
// Hint
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
//
//   The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//
//   You must write an algorithm that runs in O(n) time and without using the division operation.
//
//
//
//   Example 1:
//
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:
//
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
//
//
// Constraints:
//
//   2 <= nums.length <= 105
//   -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
//
//
//   Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)


function productExceptSelf(nums: number[]): any {
  const prefix = Array(nums.length)
  const postfix = Array(nums.length)
  const result = Array(nums.length)

  for (let i = 0; i < nums.length; i++) {
    if (i === 0)
      prefix[i] = nums[i]
    else
      prefix[i] = prefix[i - 1] * nums[i]
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1)
      postfix[i] = nums[i]
    else
      postfix[i] = postfix[i + 1] * nums[i]
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0)
      result[i] = postfix[i + 1]
    else if (i === nums.length - 1)
      result[i] = prefix[i - 1]
    else
      result[i] = prefix[i - 1] * postfix[i + 1]

  }


  return result
}


// space complexity O(1)
function productExceptSelf1(nums: number[]): any {
  const prefix = Array(nums.length)

  for (let i = 0; i < nums.length; i++) {
    if (i === 0)
      prefix[i] = 1
    else
      prefix[i] = prefix[i - 1] * nums[i - 1]
  }

  let postfix = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    prefix[i] = prefix[i] * postfix
    postfix = postfix * nums[i]
  }


  return prefix
}

const testData = [
  {
    input: [1, 2, 3, 4],
    expected: [24, 12, 8, 6]
  },
  {
    input: [-1, 1, 0, -3, 3],
    expected: [0, 0, 9, 0, 0]
  },
]


for (let {input, expected} of testData) {
  const output = productExceptSelf1(input)
  // const result = output[0] === expected[0] && output[1] === expected[1] ? 'Passed' : 'Failed'
  console.log('Input: ', input, 'Expected:', expected, 'Output:', output)
}
