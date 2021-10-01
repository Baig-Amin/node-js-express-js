var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});



router.get('/:city', function (req, res, next) {
  var city = req.params.city;

  var weatherData = fs.readFileSync('data/weather.json', 'utf8');
  const data = JSON.parse(weatherData);

  
  for (let i in data){
    // console.log(data[i].city);

    if(city === data[i].city){
      var wdata = data[i];
      // console.log(wdata);
    }
  }

  res.render('weather', wdata);
});


module.exports = router;