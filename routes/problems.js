var models  = require('../models');
var express = require('express');
var router = express.Router();

/* Returns all routes */
router.get('/', function(req, res, next) {
  models.problems.findAll({
  	where: {
  		up: true
  	}
  }).then(function(problems){
  	res.json(problems);
  });
});

/* Returns all routes set by setter */
router.get('/setter', function(req, res, next) {
  res.json({message: "to be implemented"});
});

/* Returns all routes with grade */
router.get('/grade', function(req, res, next) {
  res.json({message: "to be implemented"});
});

/* Returns a route with name */
router.get('/name', function(req, res, next) {
  res.json({message: "to be implemented"});
});


router.post('/', function(req,res,next) {
	models.problems.create(req.body).then(function(result){
		res.json(result);
	}).catch(function(error){
		res.json(error);
	})
	
});
module.exports = router;
