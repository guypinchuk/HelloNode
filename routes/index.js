var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("index");
  res.render('index', { title: 'Exprasdfasdfess' });
});
router.get('/getResponse', function(req,res){
	console.log("getresponse!!@!");
	res.send("I got your response");
});

module.exports = router;
