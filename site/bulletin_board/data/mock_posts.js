var posts = {};

/**
 * Retrieve a single post.
 * {
 *   title: string,
 *   author: string,
 *   date: string,
 *   liked: boolean,
 *   url: string,
 *   body: string
 * }
 */
posts.retrieve = (callback) => {
  var post = {
    title: "Lorem ipsum dolor sit amet.",
    author: "swright",
    date: "September 20, 2020",
    liked: true,
    url: "/posts/view",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };

  callback(post);
};

/**
 * Retrieves a list of post excerpts for the most recent posts.
 * {
 *   title: string,
 *   author: string,
 *   date: string,
 *   liked: boolean,
 *   url: string,
 *   excerpt: string
 * }
 */
posts.recent = (callback) => {
  var posts = [
    {
      title: "Lorem ipsum dolor sit amet.",
      author: "swright",
      date: "September 20, 2020",
      liked: true,
      url: "/posts/view",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      author: "swright",
      date: "September 20, 2020",
      liked: false,
      url: "/posts/view",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      author: "swright",
      date: "September 20, 2020",
      liked: false,
      url: "/posts/view",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    }
  ];

  callback(posts);
};

/**
 * Retrieves a list of post excerpts for the trending posts.
 * {
 *   title: string,
 *   author: string,
 *   date: string,
 *   liked: boolean,
 *   url: string,
 *   excerpt: string
 * }
 */
posts.trending = (callback) => {
  var posts = [
    {
      title: "Lorem ipsum dolor sit amet.",
      author: "swright",
      date: "September 20, 2020",
      liked: true,
      url: "/posts/view",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      author: "swright",
      date: "September 20, 2020",
      liked: false,
      url: "/posts/view",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      title: "Lorem ipsum dolor sit amet.",
      author: "swright",
      date: "September 20, 2020",
      liked: false,
      url: "/posts/view",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    }
  ];

  callback(posts);
};

/**
 * Creates a new Post with the given title and message.
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
posts.create = (post, callback) => {
  var success = false;
  var error_message = "";

  if (post.title.trim().length < 10) {
    error_message = "A post title is required (minimum 10 characters).";
  } else if (post.message.trim().length < 20) {
    error_message = "A post message is required (minimum 20 characters).";
  } else {
    success = true;
  }

  var result = {
    success: success,
    redirect_uri: "/posts/view",
    error_message: error_message
  };
  callback(result);
};

/**
 * Either upvotes or removes an upvote for the currently logged in user for the
 * Post being displayed.
 *
 * The callback takes no parameters.
 */
posts.upvote = (vote, callback) => {
  callback();
};

module.exports = posts;
