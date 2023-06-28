var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itemsRouter = require("./routes/items");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // Serving static files: ex: 

app.use((req, res, next) => { // This example shows a middleware function with no mount path
  console.log("new request called at: ", Date.now());
  next(); // without this line, the next middleware will not be executed
});
app.use('/', indexRouter);
app.use('/users', usersRouter); 
app.use('/items', itemsRouter); // have to load router module in app


app.route('/homepage')
   .get((req, res, next) => {
    req.calledTime = Date.now();
    console.log('before called homepage');
    res.send("this is homepage");
    next();
   }, (req, res, next) => {
    console.log('end homepage');   
   });
app.route('/book')
   .get((req, res) => {
     res.send('Get a random book')
   });


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
