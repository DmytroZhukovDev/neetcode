// Is Anagram
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
//
//   An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
//
//   Example 1:
//
// Input: s = "racecar", t = "carrace"
//
// Output: true
// Example 2:
//
// Input: s = "jar", t = "jam"
//
// Output: false
// Constraints:
//
//   s and t consist of lowercase English letters.

class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const mapS = this.createMap(s)

    for (let char of t) {

      if (!mapS.has(char))
        return false

      const total = mapS.get(char)
      if (total === 1) {
        mapS.delete(char)
      } else {
        mapS.set(char, total - 1)
      }
    }
    return mapS.size === 0

  }

  /**
   * @param {string} s
   * @return Map
   */
  createMap(s) {
    const map = new Map()
    for (let char of s) {
      if (map.has(char)) {
        const total = map.get(char)
        map.set(char, total + 1)
      } else {
        map.set(char, 1)
      }
    }
    return map
  }
}


const testData = [
  {
    input: {s: "racecar", t: "carrace"},
    expected: true
  },
  {
    input: {s: "jar", t : "jam"},
    expected: false
  },
]

const solution = new Solution()

for (let {input, expected} of testData) {
  const output = solution.isAnagram(input.s, input.t)
  const result = output === expected ? 'Passed' : 'Failed'
  console.log('Input: ', input, 'Expected:', expected, 'Output:', output, result)
}