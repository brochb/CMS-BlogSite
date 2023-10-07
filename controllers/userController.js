const { User } = require('../models'); // Import the User model

const userController = {
    // Create a new user
    createUser: async (req, res) => {
        try {
            const newUser = await User.create({
                username: req.body.username, // Get the username from the request body
                password: req.body.password, // Get the password from the request body (securely hashed and salted)
            });
            res.status(201).json(newUser); // Respond with the created user
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while creating the user.' });
        }
    },

    // User login (authentication)
    loginUser: (req, res) => {
        // Authentication logic here
        // If authentication is successful, respond with user data and a token
        // If authentication fails, respond with an error message
    },
};

module.exports = userController;
