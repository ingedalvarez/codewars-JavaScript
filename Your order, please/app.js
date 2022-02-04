function order(words) {
  let arr = words.split(' ');
  let r = /\d+/;
  let arr2 = arr.sort((a, b) => a.match(r) - b.match(r));
  return arr2.join(' ');
  // ...
}

console.log(order('is2 Thi1s T4est 3a'));

/* Your task is to sort a given string. Each word in the string will contain a single number. 
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String 
will only contain valid consecutive numbers.
Examples

"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
 */

/* let arr = 'is2 Thi1s T4est 3a'.split(" ");
console.log(arr);
let r = /\d+/;
let arr2 = arr.sort((a, b)=>a.match(r)- b.match(r))
console.log(arr2);
let str = arr2.join(" ");
console.log(str); */
