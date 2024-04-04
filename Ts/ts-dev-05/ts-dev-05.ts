const message: string | number = 50;
const messages: string[] | number[] = ['TS', 'JS', 'Swift'];

function printMsg01(msg: string | number): void {
  if (typeof msg === 'string') {
    console.log(msg.toLowerCase());
  } else {
    console.log(msg % 2);
  }
}

function printMsg02(msg: string[] | string | number): void {
  if (Array.isArray(msg)) {
    msg.map((item) => console.log(`${item} test`));
  } else if (typeof msg === 'number') {
    console.log(msg % 2);
  } else {
    console.log(msg.toLowerCase);
  }
}

printMsg01(5);
printMsg01('Abc');

printMsg02(['2', '3']);

const myPrint01 = (a: number | string, b: number | boolean): number | void => {
  if (a === b) {
    console.log(a, b);
    return 123;
  }

  console.log('test');
};

myPrint01(2, true);
myPrint01(3, 4);

function myCheck(option: { user: string } | { admin: number }) {
  if ('admin' in option) {
    console.log('add 5 ' + option.admin + 5);
  }
}

myCheck({ admin: 10 });
myCheck({ user: '10' });

function logDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.getHours);
  } else {
    console.log(date.trim());
  }
}

logDate(' 12:32:00 ');
