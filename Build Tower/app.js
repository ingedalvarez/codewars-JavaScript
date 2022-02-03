function towerBuilder(nFloors) {
  const longString = nFloors * 2 - 1;

  let tower = [];
  let n = 1;

  while (n <= nFloors) {
    let blank = nFloors - n;
    let asteris = longString - 2 * blank;
    let floor = ' '.repeat(blank) + '*'.repeat(asteris) + ' '.repeat(blank);
    tower.push(floor);
    n++;
  }
  return tower;
}

console.log(towerBuilder(6));

/* Build Tower

Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

    Python: return a list;
    JavaScript: returns an Array;
    C#: returns a string[];
    PHP: returns an array;
    C++: returns a vector<string>;
    Haskell: returns a [String];
    Ruby: returns an Array;
    Lua: returns a Table;

Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]

and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]

 */
