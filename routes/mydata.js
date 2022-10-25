var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('mydata',{fact: 'Yudu Eswar Vinay Pratap Kumar Kuchi'})
});

module.exports = router;
