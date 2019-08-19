var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks');
var fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');
var cardsRouter = require('./routes/cards');
var usersRouter = require('./routes/users');

var port = 4000;

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
// default options
app.use(fileUpload());


app.use('/', indexRouter);
app.use('/cards', cardsRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log(`The app is up on port ${port}!`))

module.exports = app;
