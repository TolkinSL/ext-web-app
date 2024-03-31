const isBirthdayData: boolean = true;
let ageData: number = 40;
const userNameData: string = 'Ivan';

const userData = {
  isBirthday: true,
  age: 40,
  userName: 'John',
  messages: {
    error: 'Error msg',
  },
};

const createError = (msg: string) => {
  throw new Error(msg);
};

function logBrtMsg({
  isBirthday,
  userName,
  age,
  messages: { error },
}: {
  isBirthday: boolean;
  userName: string;
  age: number;
  messages: { error: string };
}): string {
  if (isBirthday) {
    return `Congrats ${userName.toUpperCase()}, age ${age + 1}`;
  } else {
    return createError(error);
  }
}

console.log(logBrtMsg(userData));

//Arrays

const department: string[] = ['dev', 'devops', 'pm'];
const myNumber: number[] = [1, 6];

// department.push(5);
const report = department
  .filter((item) => item !== 'dev')
  .map((item) => `${item} - done`);
console.log(report);

const [firstElement] = report;
console.log(firstElement);
