var Sequelize = require('sequelize');
var db = require('./_db');

var Video = db.define('video', {
  href: Sequelize.STRING,
  description: Sequelize.TEXT,
  category: Sequelize.STRING
});

module.exports = Video;
