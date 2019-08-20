var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register');
});

/* GET dashboard listing. */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile');
});

/* GET records listing. */
router.get('/records', function(req, res, next) {
  res.render('recordslist');
});

/* GET doctor listing. */
router.get('/doctors', function(req, res, next) {
  res.render('doctorslist');
});

/* GET patient listing. */
router.get('/patients', function(req, res, next) {
  res.render('patientslist');
});

/* GET researchers listing. */
router.get('/researchers', function(req, res, next) {
  res.render('researcherslist');
});


/* Route to change cards */
router.get('/change', function(req, res, next) {
  res.render('cardschange');
});

/* Route to share record */
router.get('/grantaccess', function(req, res, next) {
  var recordId = req.query.id;
  res.render('access',{id:recordId});
});

/* Route to revoke access to record*/
router.get('/revokeaccess', function(req, res, next) {
  var recordId = req.query.id;
  res.render('revoke',{id:recordId});
});

module.exports = router;
