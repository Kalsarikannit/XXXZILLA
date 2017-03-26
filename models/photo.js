var Sequelize = require('sequelize');
var db = require('./_db');

var Photo = db.define('photo', {
  href: Sequelize.STRING,
  description: Sequelize.TEXT,
  category: Sequelize.STRING
});

module.exports = Photo;
