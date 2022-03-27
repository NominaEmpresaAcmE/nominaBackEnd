const dbconfig = {
    HOST: "localhost",
    USER: "jhballen",
    PASSWORD: "A310267n*",
    DB: "nominadb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
module.exports = dbconfig;