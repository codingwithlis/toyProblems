// We define the Perfect Number is a positive integer that is equal 
// to the sum of all its positive divisors except itself.

// Now, given an integer n, write a function that returns 
// true when it is a perfect number and false when it is not.

// Example:
// Input: 28
// Output: True
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// Note: The input number n will not exceed 100,000,000. (1e8)

let checkPerfectNumber = function(num) {
  let sum = 0;
  let positiveDivisors = [];
  if(num % 2 !== 0 || num === 0) return false;
  for (let i = 0; i <= num; i ++){
      if(Number.isInteger(num / i) ){
        positiveDivisors.push(num / i);
      }
    }
    let ready = positiveDivisors.slice(1);
    for (let j = 0; j < ready.length; j ++){
      sum += ready[j];
    }
    if(sum === num) return true;
    return false;
};