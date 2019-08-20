var express = require('express');
var router = express.Router();
var request = require('request');
var FormData = require('form-data');
var fs = require('fs');

/* GET cards page. */
router.get('/', function (req, res, next) {
    res.render('cards');
});

/* POST cards page. */



module.exports = router;