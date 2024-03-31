const test01: null = null;
//const test02: string = null;

function getRand() {
  if (Math.random() < 0.5) {
    return null;
  } else {
    return '   Some data   ';
  }
}

const myData = getRand();
const myDataTrim = myData ? myData.trim() : '';

console.log(myData);
console.log(myDataTrim);

// let myTest03 = undefined;
// console.log(myTest03.trim());
