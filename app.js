var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var suggestionRouter = require('./routes/suggestion/suggestionRouter');
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/suggestion-box-hw", {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MONGODB CONNECTED")
})
.catch((e) => {
  console.log(e)
});


var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/api/suggestion', suggestionRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


});

module.exports = app;
