var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
 // res.render('mydata',{fact: 'I\'m very much interested in developing web applications, I used to develop wordpress sites, android applications whenever i get free time. I have published an android application on playstore called Mama Ringtones for which i got 1Lakh+ Installs.'})
});

module.exports = router;
