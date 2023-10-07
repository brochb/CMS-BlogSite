const { Comment } = require('../models');

const commentData = [
  {
    text: 'comment',
    userId: 1,
    postId: 1,
  },
  {
    text: 'comments',
    userId: 2,
    postId: 2,
  },
  {
    text: 'commentss',
    userId: 3,
    postId: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
