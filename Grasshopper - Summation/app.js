var summation = function (num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    array[i] = i + 1;
  }
  let sum = array.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);

  return sum;
  // Code here
};

console.log(summation(5));

/* Summation

Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2 

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

 */
