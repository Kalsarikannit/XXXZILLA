var db = require('./_db');

var Photo = require('./photo');
var Video = require('./video');
var User = require('./user');
var Product = require('./product');
var User_info = require('./user_info');
var Product_info = require('./product_info');
var Article = require('/.article');

// Hotel.belongsTo(Place);
// Restaurant.belongsTo(Place);
// Activity.belongsTo(Place);

User_info.belongsTo(User);
Product_info.belongsTo(Product);

module.exports = {
	db,
	Photo,
	Video,
	User,
  User_info,
	Product,
	Article
};
