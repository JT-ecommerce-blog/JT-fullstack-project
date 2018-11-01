const express = require('express');
const router = express.Router();

// Post Model
const Post = require('../../model/Post');

// @route GET api/posts - / represents this path
// @desc Get All posts
// @access Public
router.get('/', (req, res) => {
  Post.find()
    // sorting by descending (-1), ascending would be (1)
    .sort({date: -1})
    .then(posts => res.json(posts));
});

// @route POST api/posts - / represents this path
// @desc Create A Post
// @access Public
router.post('/', (req, res, next) => {
  console.log(req.body)
  const newPost = new Post({
    author: req.body.author,
    comment: req.body.comment
  });
  newPost.save()
    .then(post => res.json(post))
    .catch(err => {
      console.log(err);
    });
    // Going to need to remove the .catch to remove newPost.save()
  res.redirect('/');
});

// @route DELETE api/posts/:id - / represents this path
// @desc Delete A Post
// @access Public
router.delete('/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => post.remove()
      .then(() => res.json({success: true})))
    // if we pass an id that doesn't exist = promise reject and catch an err
    .catch(err => res.status(404).json({
      success: false
    }));
  })
  

module.exports = router;