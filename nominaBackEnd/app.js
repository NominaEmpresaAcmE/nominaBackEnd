var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var asesorRouter = require('./routes/asesor.route');
var ventaRouter = require('./routes/venta.route');
var comisionRouter = require ('./routes/comision.route');
var nominaRouter = require ('./routes/nomina.route');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const dbManager = require ("./database.config/db.manager");

dbManager.sequelizeConnection.authenticate()
  .then(() => {
    console.log('****Connection has been established successfully.****');
    // recreate the models if the tables doesn´t exists
    dbManager.sequelizeConnection.sync().then(() => {
        console.log("Database Synced");
      });

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use('/', indexRouter);
pp.use('/asesor', asesorRouter);
app.use('/venta', ventaRouter);
app.use('/comision', comisionRouter);
app.use('/nomina', nominaRouter);


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
