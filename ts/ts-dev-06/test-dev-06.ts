//Send from server
const serverConfigT = {
  protocol: 'https',
  port: 3002,
  role: 'admin',
};

//local code
const backupConfigT: ConfigServer = {
  protocol: 'https',
  port: 3002,
};

interface ConfigServer {
  protocol: string;
  port: number;
}

const serverStartTest = (config: ConfigServer) => {
  console.log(
    `Server started ${config.protocol}:\\server.local:${config.port} on `
  );
  return 'Server started';
};

serverStartTest(serverConfigT);
serverStartTest(backupConfigT);
