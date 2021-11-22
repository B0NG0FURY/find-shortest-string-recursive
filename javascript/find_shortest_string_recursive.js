function findShortestStringRecursive(arr) {
  const lengths = arr.map(str => str.length);
  const min = Math.min(...lengths);

  if (arr[0].length === min) {
    return arr[0];
  }

  arr.shift();
  return findShortestStringRecursive(arr);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestStringRecursive(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestStringRecursive(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestStringRecursive(['flower', 'juniper', 'lily', 'dandelion']));
}

module.exports = findShortestStringRecursive;

// Please add your pseudocode to this file

  // 1. map the string lengths and find the smallest value with Math.min()
  // 2. compare the smallest value to the first index of arr. return string if its equal, otherwise shift() the first value of the arr and run the function again with the shorter Array.

// And a written explanation of your solution

// The smallest string length must be found so each string's length can be compared to that value. Each string that doesn't match can be removed from the array with shift() and then the function can be recursively called again with the shorter array until the one with the length matching the smallest is found.
