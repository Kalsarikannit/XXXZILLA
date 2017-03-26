var Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/azilla', {
  logging: false    // subject to change TODO
});

module.exports = db;
