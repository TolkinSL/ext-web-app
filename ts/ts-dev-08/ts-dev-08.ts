//Опциональные типы

interface User {
  login: string;
  password: string;
  age: number;
  // addres: string | undefined;
  addres?: string;
  parents?: {
    mother: string;
    father?: string;
  };
}

const user: User = {
  login: 'vasia',
  password: '1234',
  age: 37,
};

const dbName = 'Postgre';
let dbTest: string;

function sendUserData(userObj: User, db?: string) {
  dbTest = 'Insert data global';
  console.log(db?.toLowerCase());
  console.log(userObj.parents?.mother);
}

sendUserData(user);
sendUserData(user, dbName);

//Принудительное извлечение так как знаем что есть иначе будет ошибка
console.log(dbTest!);

//Non-Null отключение проверки (принудительное извлечение)
user.parents = { mother: '' };
user.parents.mother = 'Sofia';
const test1 = user.parents!.mother;

//Только чтение readonly --------

interface User1 {
  readonly login: string;
  password: string;
  age: number;
  readonly addres?: string;
  parents?: {
    mother: string;
    father?: string;
  };
}

const user1: User1 = {
  login: 'vasia',
  password: '1234',
  age: 37,
};

// user1.login = 'petia';
// user1.addres = 'Moscow';

// const setupPorts: ReadonlyArray<number> = [3000, 3002];
const setupPorts: readonly number[] = [3000, 3002];
// setupPorts[0] = 2745;
// setupPorts.push(7456);

const initPorts: readonly [number, ...string[]] = [3000, '3542'];
//initPorts[0] = 2745;

//Generic Readonly на всю структуру
const user2: Readonly<User1> = {
  login: 'vasia',
  password: '1234',
  age: 37,
};

// user2.password = '123';
