var users = {};

/**
 * Authenticates a user.
 *
 * The callback takes a single parameter:
 * {
 *   success: boolean,
 *   redirect_uri: string,
 *   error_message: string
 * }
 * redirect_uri will always be defined when success is true.
 * error_message will always be defined when success is false.
 * redirect_uri must only be used when success is true.
 */
users.login = (credentials, callback) => {
  var success = false;
  var error_message = "";

  if (credentials.username != "test") {
    error_message = "We don't recognize your username. Did you want to sign up?";
  } else if (credentials.password != "123") {
    error_message = "Login failed.";
  } else {
    success = true;
  }

  var result = {
    success: success,
    redirect_uri: "/posts/recent",
    error_message: error_message
  };
  callback(result);
}

/**
 * Creates a new user.
 *
 * The callback takes a single parameter:
 * {
 *   success: boolean,
 *   redirect_uri: string,
 *   error_message: string
 * }
 * redirect_uri will always be defined when success is true.
 * error_message will always be defined when success is false.
 * redirect_uri must only be used when success is true.
 */
users.signup = (credentials, callback) => {
  var success = false;
  var error_message = "";

  if (credentials.username == "test") {
    error_message = "Username taken! Please try another!";
  } else if (credentials.password.length < 3) {
    error_message = "Your password is not long enough (3 character minimum)!";
  } else {
    success = true;
  }

  var result = {
    success: success,
    redirect_uri: "/posts/recent",
    error_message: error_message
  };
  callback(result);
}

module.exports = users;
