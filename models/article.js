var Sequelize = require('sequelize');
var db = require('./_db');

var Article = db.define('article', {
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  description: Sequelize.TEXT,
  category: Sequelize.STRING
});

module.exports = Article;
