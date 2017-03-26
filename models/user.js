var Sequelize = require('sequelize');
var db = require('./_db');

var User = db.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  purchase_history: Sequelize.ARRAY[Sequelize.STRING]
});

module.exports = User;
