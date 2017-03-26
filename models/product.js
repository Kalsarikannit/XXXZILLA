var Sequelize = require('sequelize');
var db = require('./_db');

var Product = db.define('product', {
  name: Sequelize.STRING,
  description: Sequelize.STRING
});

module.exports = Product;
