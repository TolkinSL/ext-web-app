//Запрос Типов в единичных случаях (без интерфейсов)

const dataControl = {
  water: 200,
  gaz: 30,
};

function checkData(data: typeof dataControl): boolean {
  const dataUser = {
    water: 200,
    gaz: 30,
  };

  if (data.gaz === dataUser.gaz && data.water === dataUser.water) {
    return true;
  } else {
    return false;
  }
}

const indent = {
  login: 'vasia',
  pass: '123',
}

let identClone: typeof indent;