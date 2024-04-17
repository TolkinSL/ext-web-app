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
  dbTest = 'Insert data global'
  console.log(db?.toLowerCase());
  console.log(userObj.parents?.mother);
}

sendUserData(user);
sendUserData(user, dbName);

//Принудительное извлечение так как знаем что есть иначе будет ошибка
console.log(dbTest!)

//Non-Null отключение проверки (принудительное извлечение)
user.parents = { mother: '' };
user.parents.mother = 'Sofia';
const test1 = user.parents!.mother;
