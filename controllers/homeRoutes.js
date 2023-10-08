const router = require('express').Router();
const { Comment, User } = require('../models');
const withAuth = require('../utils/middleware/auth');

router.get('/', async (req, res) => {
  try {
    // Get all comments and JOIN with user data
    const commentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      comments,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add other routes for '/login', '/dashboard', and more as needed

module.exports = router;
