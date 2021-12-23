const ip = {
  external: "database.server.com",
  local: "127.0.0.1"
}

const values = {
  port : "1228",
  enableSSH: false,
  mongoUrl : `mongodb://MONGOUSER:MONGOPASS@172.16.2.30:27017/`,
  mongoDbName : "stevia",
  mongoCollection : "event1s",
  //pgUrl = `postgresql://MONGOUSER:MONGOPASS@172.16.2.30:3211/mydb`,
  sshConf: {
    username:'SSHUSER',
    password:'SSHPASS',
    host:publicIP,
    port:22,
    dstHost:publicIP,
    dstPort:27017,
    localHost:'127.0.0.1',
    localPort: 27000
  }
};

module.exports = values;
