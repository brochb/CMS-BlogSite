const { Comment } = require('../models'); // Import the Comment model

const commentController = {
    // Create a new comment
    createComment: async (req, res) => {
        try {
            const newComment = await Comment.create({
                text: req.body.text, // Get the comment text from the request body
                author: req.user.id, // Get the author (user) ID from the authenticated user
                postId: req.params.postId, // Get the associated post ID from the URL parameters
            });
            res.status(201).json(newComment); // Respond with the created comment
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while creating the comment.' });
        }
    },
};

module.exports = commentController;
