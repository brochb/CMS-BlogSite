const router = require('express').Router();
const { Comment, User } = require('../models');
const withAuth = require('../utils/middleware/auth');

// Route for the homepage
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

    // Pass serialized data and session flag into the homepage template
    res.render('homepage', {
      layout: 'main',
      comments,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route for the login page
router.get('/login', (req, res) => {
  // try {
  //   // If the user is already logged in, redirect them to the dashboard
  //   if (req.session.logged_in) {
  //     res.redirect('/dashboard');
  //     return;
  //   } else {
      // Render the login page
      res.render('login', {
        layout: 'main',
        // layout: false,
      });
  //   }
  // } catch (error) {
  //   console.error(error);
  //   console.log(error)
  //   res.status(500).send('Internal Server Error');
  // }
});


// Route for the dashboard page (protected without withAuth middleware)
router.get('/dashboard', async (req, res) => {
  try {
    // Find the logged-in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Comment }],
    });

    // Serialize user data
    const user = userData.get({ plain: true });

    // Pass serialized user data and session flag into the dashboard template
    res.render('dashboard', {
      layout: false,
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
