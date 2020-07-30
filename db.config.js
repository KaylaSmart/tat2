module.exports = {

"development" : {
  "username": process.env.MYSQL_USER,
  "password": process.env.MYSQL_KEY,
  "database": process.env.MYSQL_DBNAME,
  "host": process.env.MYSQL_HOST,
  "dialect": "mysql"
},
"test": {
    "username" : "root",
    "password": null,
    "database": "database_test",
    "host": "12.0.0.1",
    "dialect": "mysql",
    // pool: 
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    },

    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
};