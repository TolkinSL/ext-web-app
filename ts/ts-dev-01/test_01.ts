console.log(typeof ('55' + 5));

function logBrtMsg2(isBirthday: boolean, userName: string, age: number): string {
  if (isBirthday) {
    console.log(`Congrats ${userName.toUpperCase()}, age: ${age + 1}`);
    return '111';
  }
  throw new Error('Not a birthday');
}

console.log('Начало');

try {
  // const result = logBrtMsg(false, "John", 25);
  const result = logBrtMsg2(false, 'John', 25);
  console.log('Результат1:', result);
  console.log('Конец1');
  console.log('Результат2:', result);
} catch (error) {
  // console.log('Произошла ошибка2:', error.message);
  if (error instanceof Error) {
    console.log('Произошла ошибка2:', error.message);
  } else {
    console.log('Неизвестная ошибка:', error);
  }
}
console.log('Конец2');
