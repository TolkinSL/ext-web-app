const currRate = '1.05';

const fetchCurr = (response: string): number => {
  const data: number = Number(JSON.parse(response));
  return data;
};

function transferEurToUsd(available: boolean, amount: number, commission: number) {
  if (available) {
    let res = fetchCurr(currRate) * amount * commission;
    console.log(res);
    // Или запись в элемент на странице вместо консоли
  } else {
    console.log('Сейчас обмен недоступен');
  }
}

transferEurToUsd(true, 500, 1.05);
