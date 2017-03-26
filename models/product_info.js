var Sequelize = require('sequelize');
var db = require('./_db');

var Product_info = db.define('product_info', {
  color: Sequelize.STRING,
  size: Sequelize.STRING,
  price: Sequelize.DOUBLE
  category: Sequelize.STRING
});

module.exports = Product_info;
