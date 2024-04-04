'use strict';

const arr = ['a', 'b', 'c'];
const arrObj = {
  0: 'a',
  1: 'b',
  2: 'c'
}

const obj = {a: 1, b: 2};
const workObj = {
  'Anna': 500,
  Alice: 750,
}

arrObj[4] = 'azaz';

console.log(arrObj);
console.log(arrObj.c);
console.log(workObj.Anna);
console.log(workObj['Alice']);
console.log(arrObj[1]);
