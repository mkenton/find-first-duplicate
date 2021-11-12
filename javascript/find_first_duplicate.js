// function that takes in an array of values and returns the value of the first duplicate that occurs. If no docuplicates, returns -1.

function findFirstDuplicate(arr) {
  // initialize a Set (a collection of unique values "nums". Each value in "nums" can only occur once in the set.)
  const nums = new Set()

  // iterate over array
  for (const num of arr) {
    // check if set nums contains current num. if so, it is the first duplicate. return num to return first duplciate and exit function
    if (nums.has(num)) {
      return num
    }
    // if set does not yet contain num, add to Set. 
    nums.add(num)
  }

  // if no num is returned after the above for loop completes, there are no duplicates (all values were unique because the if condition never returned num and exited the function). Instead, now return -1 as required.
  return -1
}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
