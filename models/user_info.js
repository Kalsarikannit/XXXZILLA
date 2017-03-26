var Sequelize = require('sequelize');
var db = require('./_db');

var User_info = db.define('user_info', {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  address: Sequelize.STRING,
  interest: Sequelize.TEXT
});

module.exports = User_info;
