type ServerStart = (protocol: 'http' | 'https', port: 3000 | 3002) => string;

const serverStart: ServerStart = (
  protocol: 'http' | 'https',
  port: 3000 | 3002
) => {
  console.log(`Server started ${protocol}:\\server.local:${port} on `);
  return 'Server started';
};

// const serverStart: (protocol: 'http' | 'https', port: 3000 | 3002) => string = (
//   protocol: 'http' | 'https',
//   port: 3000 | 3002
// ) => {
//   console.log(`Server started ${protocol}:\\server.local:${port} on `);
//   return 'Server started';
// };

serverStart('https', 3002);

type Config = { protocol: 'http' | 'https'; port: 3000 | 3002 };
type Role = { role: string };
type ConfigWithRole = Config & Role;

const serverConfig: Config = {
  protocol: 'https',
  port: 3002,
};

const backupConfig: ConfigWithRole = {
  protocol: 'https',
  port: 3000,
  role: 'admin',
};

const adminConfig: Config & Role = {
  protocol: 'https',
  port: 3002,
  role: 'admin',
};

serverStart(serverConfig.protocol, serverConfig.port);

//Интерфейсы------

// type Config1 = { protocol: 'http' | 'https'; port: 3000 | 3002 };
interface Config1 {
  protocol: 'http' | 'https';
  port: 3000 | 3002;
}

interface Role1 {
  role: string;
}

interface ConfigWithRole1 extends Config1, Role1 {}

const serverConfig1: Config1 = {
  protocol: 'https',
  port: 3002,
};

const serverConfig2: ConfigWithRole1 = {
  protocol: 'https',
  port: 3002,
  role: 'admin',
};

//Интерфейс с функцией

interface ConfigWithFunc3 {
  protocol: 'http' | 'https';
  port: 3000 | 3002;
  log: (msg: string) => void;
}

const serverConfig3: ConfigWithFunc3 = {
  protocol: 'https',
  port: 3002,
  log: (msg: string): void => console.log(msg),
};

type ServerStartLog = (
  protocol: 'http' | 'https',
  port: 3000 | 3002,
  log: (msg: string) => void
) => string;

// const serverStartLog: ServerStartLog = (
//   protocol: 'http' | 'https',
//   port: 3000 | 3002,
//   log: Function
// ) => {
//   console.log(`Server started ${protocol}:\\server.local:${port} on `);
//   return 'Server started';
// };

// const serverStartLog: ServerStartLog = (
//   protocol: 'http' | 'https',
//   port: 3000 | 3002,
//   log: (msg111: string) => void
// ): 'Server started' => {
//   log(`Server started ${protocol}:\\server.local:${port} on `);
//   return 'Server started';
// };

// serverStartLog(serverConfig3.protocol, serverConfig3.port, serverConfig3.log);

//Упрощенная запись так как типы были уже указаны const serverStartLog: ServerStartLog
const serverStartLog: ServerStartLog = (
  protocol,
  port,
  log
): 'Server started' => {
  log(`Server started ${protocol}:\\server.local:${port} on `);
  return 'Server started';
};

serverStartLog(serverConfig3.protocol, serverConfig3.port, serverConfig3.log);

// type Styles = {
//   [key: string]: string;
// };

interface Styles {
  [key: string]: string;
}

const styles: Styles = {
  position: 'absolute',
  top: '20px',
  color: 'red',
};

//Расширение интерфейсов для внешних библиотек к примеру
//Импортируемый интерфейс
interface IConfig {
  protocol: 'http' | 'https';
  port: 3000 | 3001;
}
//Добавленный интерфейс
interface IConfig {
  date: Date;
}

interface IRole {
  role: string;
}

interface IConfigWithRole extends IConfig, IRole {}

const serverIConfig: IConfigWithRole = {
  protocol: 'http',
  port: 3001,
  role: 'admin',
  date: new Date()
}