// let userName: string = "Ivan";

const isBirthdayData: boolean = false;
let ageData: number = 40;
const userNameData: string = 'John';

const userData = '{"isBirthdayData": false, "ageData": 40, "userNameData": "John"}';
const userObj: {
  isBirthdayData: boolean;
  ageData: number;
  userNameData: string;
} = JSON.parse(userData);

// console.log(userObj.smt);

const createError = (msg: string) => {
  throw new Error(msg);
};

function logBrtMsg(isBirthday: boolean, userName: string, age: number): string {
  if (isBirthday) {
    console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
    return '111';
  } else if (!isBirthday) {
    return '222';
  }

  return createError('Error in code');
}

logBrtMsg(isBirthdayData, userNameData, 40);

