var express = require('express');
var router = express.Router();

var datasource = require('../data/mock_users.js')

/**
 * The "Login" endpoint.
 *
 * {
 *   username: string,
 *   password: string
 * }
 *
 * {
 *   success: boolean,
 *   redirect_uri: string,
 *   error_message: string
 * }
 */
router.post('/login', function(req, res, next) {
  var credentials = req.body;

  datasource.login(credentials, function(result) {
    if (!result.success) {
      res.status(403);
    }
    res.send(result);
  });
});

/**
 * The "Sign Up" endpoint.
 *
 * {
 *   username: string,
 *   password: string
 * }
 *
 * {
 *   success: boolean,
 *   redirect_uri: string,
 *   error_message: string
 * }
 */
router.post('/', function(req, res, next) {
  var credentials = req.body;

  datasource.signup(credentials, function(result) {
    if (!result.success) {
      res.status(400);
    }
    res.send(result);
  });
});

module.exports = router;
