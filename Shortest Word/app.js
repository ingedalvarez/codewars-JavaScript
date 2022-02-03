function findShort(s) {
  const arrayS = s.split(' ');
  let sortArrayS = arrayS.sort((a, b) => a.length - b.length);
  let shortWord = sortArrayS[0].length;
  return shortWord;
}

// other solution on codewar
/* 
function findShort(s) {
  return Math.min.apply(
    null,
    s.split(' ').map((w) => w.length)
  );
}

function findShort(s) {
  return Math.min(...s.split(' ').map((s) => s.length));
}

const findShort = (s) =>
  s
    .split(' ')
    .sort((a, b) => b.length - a.length)
    .pop().length; */
