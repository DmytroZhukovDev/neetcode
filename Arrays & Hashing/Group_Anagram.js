// 49. Group Anagrams
// Medium
// Topics
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
//
//   An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//
//
//
//   Example 1:
//
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
//
// Input: strs = [""]
// Output: [[""]]
// Example 3:
//
// Input: strs = ["a"]
// Output: [["a"]]
//
//
// Constraints:
//
//   1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

// Easy solution with sorting O(n*k*log(k))
const groupAnagrams = (strs) => {
  const map = new Map()
  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split('').sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
    if (map.has(sorted)) {
      map.get(sorted).push(strs[i])
    } else {
      map.set(sorted, [strs[i]])
    }
  }
  return Array.from(map.values())
};


// Optimal Solution O(n*k)
const groupAnagrams2 = (strs) => {
  const groups = new Map()
  for (let i = 0; i < strs.length; i++) {
    const converted = Array(26).fill(0)
    for (let char of strs[i]) {
      const pos = char.charCodeAt(0) - 'a'.charCodeAt('a')
      converted[pos] = converted[pos] + 1
    }
    const key = converted.join(',')
    if (groups.has(key)) {
      groups.get(key).push(strs[i])
    } else {
      groups.set(key, [strs[i]])
    }
  }
  return Array.from(groups.values())
}

const testData = [
  {
    input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]
  },
  {
    input: [""],
    expected: [[""]]
  },
  {
    input: ["a"],
    expected: [["a"]]
  },
]


for (let {input, expected} of testData) {
  const output = groupAnagrams2(input)
  console.log('Input: ', input, 'Expected:', expected, 'Output:', output)
}