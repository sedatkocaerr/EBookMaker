var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({data:"Hello from EBookMakerApi"});
  res.end();
});

module.exports = router;
