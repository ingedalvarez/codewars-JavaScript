function reverseWords(str) {
  let arr = str.split(' ');
  let arr2 = arr.map((a) => a.split('').reverse('').join(''));
  return arr2.join(' ');
  // Go for it
}

console.log(reverseWords('double  spaces'));


/* Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"       ==> "elbuod  secaps"*/


