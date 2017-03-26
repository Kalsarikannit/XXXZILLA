var Promise = require('bluebird');
var router = require('express').Router();
var Article = require('../models').article;
var Photo = require('../models').photo;
var Product_info = require('../models').product_info;
var Product = require('../models').product;
var User = require('../models').user;
var User_info = require('../models').user_info;
var Video = require('../models').video;

// get articles
router.get('/', function(req, res, next){
  Article.findAll()
  .then(function(articles){
    res.send(articles);   // TODO change to render index.html
  })
  .catch(next);
})

// get photos
router.get('/photo', function(req, res, next){
  Photo.findAll()
  .then(function(photos){
    res.send(photos);    // TODO change to render /photo  html
  })
  .catch(next);
})

// get videos
router.get('/videos', function(req, res, next){
  Videos
})
