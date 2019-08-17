var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks');

var indexRouter = require('./routes/index');
var dashboardRouter = require('./routes/dashboard');
var recordsRouter = require('./routes/record');
var doctorsRouter = require('./routes/doctor');
var patientsRouter = require('./routes/patient');
var researchersRouter = require('./routes/researcher');
var usersRouter = require('./routes/users');

var port = 8080;

var app = express();
nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.set('view engine', 'njk');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);
app.use('/records', recordsRouter);
app.use('/doctors', doctorsRouter);
app.use('/patients', patientsRouter);
app.use('/researchers', researchersRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log(`The app is up on port ${port}!`))

module.exports = app;
