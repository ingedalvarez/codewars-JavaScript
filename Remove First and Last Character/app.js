function removeChar(str) {
  let last = str.length - 1;
  const newStr = str.slice(1, last);
  return newStr;
  //You got this!
}

console.log(removeChar('circulo'));

/* It's pretty straightforward. Your goal is to create a function 
that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't 
have to worry with strings with less than two characters. */

/* other solution on codewar

function removeChar(str) {
  return str.slice(1, -1);
} */
