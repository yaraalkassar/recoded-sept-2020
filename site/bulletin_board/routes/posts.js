var express = require('express');
var router = express.Router();

/** EJS: A list of the recent posts on the Bulletin Board. */
router.get('/recent', (req, res, next) => {
  res.render('post_list', { id: 'recent', title: 'Recent Posts' });
});

/** EJS: A list of the trending posts on the Bulletin Board. */
router.get('/trending', (req, res, next) => {
  res.render('post_list', { id: 'trending', title: 'Trending Posts' });
});

/** EJS: Form for creating a new post on the Bulletin Board. */
router.get('/create', (req, res, next) => {
  res.render('create_post');
});

/** EJS: The detailed view of a single post. */
router.get('/view', (req, res, next) => {
  res.render('view_post', { title: 'Lorem ipsum dolor sit amet.' });
});

module.exports = router;
