const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

// Associations
Post.belongsTo(User, {
  foreignKey: 'userId',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
});

User.hasMany(Post, {
  foreignKey: 'userId',
});

User.hasMany(Comment, {
  foreignKey: 'userId',
});

module.exports = {
  Comment,
  Post,
  User,
};
