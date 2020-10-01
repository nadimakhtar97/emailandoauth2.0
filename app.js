/*
WAY TO USE THE APP.

1. CLONE THE PROJECT FORM GITHUB REPOSITORY.
2. CREATE A FILE WITH NAME "variables.env"
3. IN "variables.env" file WRITE THE VALUE OF
   "GOOGLE_CLIENT_ID =" and "GOOGLE_CLIENT_SECRET ="  obtained from developer.console.google
   after enabling the gmail API and getting credentials.
4. OPEN THE PROJECT DIRECTORY IN CONSOLE/TERMINAL.
5. IN CONSOLE TYPE "npm install" TO INSTALL REQUIRED DEPENDENCIES.
6. AFTER DEPENDENCIES ARE INSTALLED THEN IN CONSOLE TYPE "node app" without quotes.
7. NOW THE SERVER HAS STARTED LISTENING ON A PORT MENTIONED IN CONSOLE
8. GO TO BROWSER AND GOTO "http://localhost:PORT/authenticate" TO INITIATE OAUTH2.0 PROCESS.
9. AFTER YOU HAVE AGREED WITH THE CONSENT PAGE THEN GOTO "http://localhost:PORT/sendmail" to send mail
   from your account to the account mentioned in the "./controller/mailController.js" line no. 28 .

 */



const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');
const passportConfig = require('./config/passport config')
const routes = require('./routes/routes');
const app = express();
require('dotenv').config({path:"./variables.env"});

const PORT = process.env.PORT || 5000;

passport.initialize();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// This is a middleware which logs information about each
//request to server in console.
app.use(logger('dev'));

//To use routes mentioned in "./routes/routes.js" file.
app.use('/', routes);

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

// app listening on PORT
app.listen(PORT,()=>console.log(`app is up and running on port ${PORT}`));

