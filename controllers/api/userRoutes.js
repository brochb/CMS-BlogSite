const router = require('express').Router();
const { User } = require('../../models');

// Route for creating a new user
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    // Set the user session data upon successful user creation
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      // Return an error if the user is not found
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      // Return an error if the password is incorrect
      res.status(400).json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    // Set the user session data upon successful login
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for user logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Destroy the session to log the user out
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
