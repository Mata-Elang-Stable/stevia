const ip = {
  external: "database.server.com",
  local: "127.0.0.1"
}

const values = {
  port: 1228,
  enableSSH: false,
  mongoUrl: `mongodb://user:password@172.16.2.80:27017/`,
  mongoDbName: "stevia",
  mongoCollection: "event1s",
  pgUrl: `postgresql://user:password@172.16.2.80:3211/mydb`,
  sshConf: {
    username: "sshUser",
    password: "secretpassword",
    host: ip.external,
    port: 22,
    dstHost: ip.external,
    dstPort: 27017,
    localHost: "127.0.0.1",
    localPort: 27000
  }
};

module.exports = values;
