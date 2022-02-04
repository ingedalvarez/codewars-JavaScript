function sumPos(arr){
    return arr.filter((a)=>a>0).reduce((acc, curr)=>{ 
        acc+=curr; 
        return acc;}, 0)
}

console.log(sumPos([1, -4, 7, 12]));

/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
 */