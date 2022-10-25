var express = require('express');
var router = express.Router();
var value;
var min  = 1
var max  = 1000


router.get('/',function(req, res, next) {
    fake_url = "https://fake.com/path" + req.url
        const url = new URL(fake_url)
        const search_params = url.searchParams
    

    value =(Math.random() * (max - min) + min).toFixed(2);
    res.write('')
    res.write('Math.fround() applied to ' + [value] + ' is ' +Math.fround(value) + "\n")
    res.write('Math.random() applied to ' + [value] + ' is ' +Math.floor(Math.random(value) * value) + "\n");
    res.end('Math.round() applied to ' + [value] + ' is ' +Math.round(value));
  
});

module.exports = router;
