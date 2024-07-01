// 125. Valid Palindrome
// Easy
// Topics
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
//
//   Given a string s, return true if it is a palindrome, or false otherwise.
//
//
//
//   Example 1:
//
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
//   Example 2:
//
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
//   Example 3:
//
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
//   Since an empty string reads the same forward and backward, it is a palindrome.
//
//
//   Constraints:
//
// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.


const testData = [
  {
    input: "A man, a plan, a canal: Panama",
    expected: true
  },
  {
    input: "race a car",
    expected: false
  },
  {
    input: " ",
    expected: true
  },

]

function isPalindrome(s: string): boolean {
  let normalizedStr = ''

  for (let char of s) {
    char = char.toLowerCase()
    const charCode = char.charCodeAt(0)

    if ((charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0)) || (charCode >= '0'.charCodeAt(0) && charCode <= '9'.charCodeAt(0))) {
      normalizedStr += char
    }
  }

  const middle = Math.trunc(normalizedStr.length / 2)
  for (let i = 0; i < middle; i++) {

    if (normalizedStr[i] !== normalizedStr[normalizedStr.length - 1 - i]) {
      return false
    }
  }
  return true
}


for (let {input, expected} of testData) {
  const output = isPalindrome(input)
  const result = output === expected ? 'Passed' : 'Failed'
  console.log('Input: ', 'Expected:', expected, 'Output:', output, result)
}
