var express = require('express');
var router = express.Router();

/* GET listing. */
router.get('/', function(req, res, next) {
  res.render('researcherslist');
});

module.exports = router;
