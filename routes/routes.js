const express = require('express');
const router = express.Router();
const passport = require('passport');
const mailController = require('../controller/mailController');
const authenticateController = require('../controller/authenticateController');
const viewController = require('../controller/viewController');
require('../config/passport config');

//This is the default api endpoint.
router.get('/',viewController.welcome);


// This API endpoint is used to the the user and store user's
// ACCESS TOKEN AND REFRESH TOKEN into a local file 'token.json'
router.get('/authorize',authenticateController.authenticate);


// This API endpoint is used to redirect the user after user has accepted
// the google's terms and condition
// and the access to data and commands the application is asking for.
router.get('/redirect',authenticateController.getAccessAndRefreshToken,viewController.redirect)


// This API endpoint is used to send an email form user's gmail account
// to the account specified in the application's code
// i.e in file '../controller/mailController.js' line no. 25
router.get('/sendmail',mailController.sendmail);

module.exports = router;
