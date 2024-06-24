// 347. Top K Frequent Elements
// Medium
// Topics
// Companies
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
//
//
//
//   Example 1:
//
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
//
// Input: nums = [1], k = 1
// Output: [1]
//
//
// Constraints:
//
//   1 <= nums.length <= 105
//   -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.
//
//
//   Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// O(n*log(n))
const topKFrequent = (nums, k) => {
  const map = new Map()
  for (let num of nums) {
    if (map.has(num)) {
      const counter = map.get(num) + 1
      map.set(num, counter)
    } else {
      map.set(num, 1)
    }
  }
  const sortedArray = Array.from(map.entries()).sort((a, b) => b[1] - a[1])

  return sortedArray.slice(0, k).map(v => v[0])
};

// o(n)
const topKFrequent2 = (nums, k) => {
  const map = new Map()
  for (let num of nums) {
    if (map.has(num)) {
      const counter = map.get(num) + 1
      map.set(num, counter)
    } else {
      map.set(num, 1)
    }
  }
  const buckets = Array(nums.length).fill([])
  for (let key of map.keys()) {
    const index = map.get(key) - 1
    buckets[index] = [...buckets[index], key]
  }
  let flatSortedList= []
  for(let i=buckets.length-1;i>=0;i--) {
    flatSortedList = flatSortedList.concat(buckets[i])
    if (flatSortedList.length >= k){
      return flatSortedList.slice(0, k)
    }
  }
  return []
};


const testData = [
  {
    input: {nums: [1, 1, 1, 2, 2, 3], k: 2},
    expected: [1, 2]
  },
  {
    input: {nums: [1], k: 1},
    expected: [1]
  },
  {
    input: {nums: [1, 2], k: 2},
    expected: [1, 2]
  },
]


for (let {input, expected} of testData) {
  const output = topKFrequent2(input.nums, input.k)
  console.log('Input: ', input, 'Expected:', expected, 'Output:', output)
}