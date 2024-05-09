//Тип unknown

//Вероятные данные сервера c ошибкой
let smth: unknown;
smth = 'str';

// let dataArr: string[] = smth;
// console.log(dataArr);

// dataArr.map((item) => item);

//Работает фейковая функция с any
// const someValue: any = 10;
// someValue.test()

//Сужение типов для определения вида типов-------

function fetchData(data: unknown) {
  if (typeof data === 'string') {
    console.log(data.toUpperCase());
  }
}

//-----

interface UserData {
  isBirthday: boolean;
  ageData: number;
  userName: string;
}

const userData = '{"isBirthday": true, "ageData": 40, "userName": "Vasia"}';

const userObj: UserData = JSON.parse(userData);
console.log(userObj.isBirthday);

function safeParse(data: string): unknown {
  return JSON.parse(data);
}

const dataSrv = safeParse(userData);
console.log(dataSrv);

//Safe data
function safeData(data: unknown): void {
  if (typeof data === 'string') {
    console.log(data.toUpperCase());
  } else if (Array.isArray(data)) {
    //data is Array
    console.log('array ' + data);
  } else if (typeof data === 'object' && data) {
    //data is object and not null
    console.log('object ' + data);
  } else {
    console.error('Data error');
  }
}

safeData('Test');
safeData(['One', 'Two']);
safeData({ test: 1 });

//Сужение типа в ошибке
try {
  if (1) {
    // throw 'сообщение об ошибке';
    throw new Error('msg error');
  }
} catch (error) {
  if (error instanceof Error) {
    //Определение что ошибка потомок класса Error
    console.log('class - ' + error.message);
  }
  if (typeof error === 'string') {
    console.log('custom - ' + error);
  }
}
