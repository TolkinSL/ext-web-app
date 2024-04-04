const userDataTuple: [boolean, number, string] = [true, 40, 'Ivan'];
const userDataTuple2 = [true, 40, 'Ivan'];

// userDataTuple[0] = 'true';

userDataTuple.push('test');
// userDataTuple[3];

const res = userDataTuple.map((item) => `${item} - data`);
console.log(res);

const [active, age] = userDataTuple;

const userDataTuple1: [boolean, number, ...string[]] = [
  true,
  40,
  'Ivan',
  'Anna',
];

// ------------ Union

const message: string | number = 5;
const messages: string[] | number[] = ['a', 'b'];
const messages2: (string | number)[] = ['a', 5];

function printMsg(msg: string | number): void {
  console.log(msg);
}

printMsg(5);
// printMsg(true);
