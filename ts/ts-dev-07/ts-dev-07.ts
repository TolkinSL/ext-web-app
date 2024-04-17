let salary: number;
salary = 500;

interface UserData {
  isBirthday: boolean;
  ageData: number;
  userName: string;
}

const userData = '{"isBirthday": true, "ageData": 40, "userName": "Vasia"}';

const userObj: UserData = JSON.parse(userData);
console.log(userObj.isBirthday);

//--------

let isOk = true;
let testParam: null | string = null;

if (isOk) {
  testParam = 'Vasia';
  // testParam = 5;
  console.log(testParam);
}

const testNum1 = 5;
const testNum2: number = 37;

let testResult1: number = testNum1 + testNum2;