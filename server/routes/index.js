var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {

  var formData = {
    pay_rate: '60000',
    filing_status: 'single',
    state:'CO',
    year: 2014
  };

  request.post({
    url:'http://taxee.io/api/v1/calculate/2014',
    form: formData
  }, function(err, response, body) {
    res.send(response.body);
  });

});

module.exports = router;
