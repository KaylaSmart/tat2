const dbConfig = require("../db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: 'mysql',
  operatorsAliases: false
});



// 

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.form = require("./contact")(sequelize, Sequelize);

module.exports = db;