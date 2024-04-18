enum Directions {
  TOP,
  LEFT,
  RIGHT,
  BOTTOM,
}

enum TimingFunc {
  EASE = 'ease',
  EASE_IN = 'ease-in',
  LINEAR = 'linear',
}

function frame(elem: string, direction: Directions, tFunc: TimingFunc): void {
  if (direction === Directions.TOP) {
  }
  if (direction === Directions.LEFT) {
    console.log(tFunc);
  }
}

frame('id', Directions.LEFT, TimingFunc.EASE_IN);

//------------------

enum StatusCode {
  SUCCESS,
  IN_PROGRESS,
  FAILED,
}

const resJSON = `{
  "message": "Pay in progress",
  "statusCode": 1
}`;

//Чтобы res не был any можно типизировать и сопоставить с enum
interface Response {
  message: string;
  statusCode: StatusCode;
}

// const res = JSON.parse(resJSON);
const res: Response = JSON.parse(resJSON);

if (res.statusCode === StatusCode.IN_PROGRESS) {
  console.log(res.message);
}
