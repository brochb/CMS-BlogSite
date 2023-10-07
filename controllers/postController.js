const { Post, Comment, User } = require('../models'); // Import the necessary models

const postController = {
    // Retrieve all blog posts
    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.findAll({
                include: [
                    {
                        model: User, // Include the User model to fetch post creators
                        attributes: ['username'], // Include only the username attribute
                    },
                    {
                        model: Comment, // Include the Comment model to count comments
                        attributes: [
                            [Sequelize.fn('COUNT', Sequelize.col('comments.id')), 'commentCount'],
                        ], // Include a count of comments as "commentCount"
                    },
                ],
            });
            res.status(200).json(posts); // Respond with the list of blog posts
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while fetching blog posts.' });
        }
    },
};

module.exports = postController;
