function oddOrEven(array) {
  const sumint = array.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);

  console.log(sumint);
  return sumint % 2 === 0 ? 'even' : 'odd';
  //enter code here
}

console.log(oddOrEven([2, 3, 4, 5, 6]));

/*
Task:

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
Examples:

Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"


*/
