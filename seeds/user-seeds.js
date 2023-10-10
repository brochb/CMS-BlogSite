const { User } = require('../models');

const userData = [
  {
    username: 'testuser1',
    email: 'testuser1@1.com',
    password: 'supersecure'
  },
  {
    username: 'testuser2',
    email: 'testuser2@1.com',
    password: 'supersecure'
  },
  {
    username: 'testuser3',
    email: 'testuser3@1.com',
    password: 'supersecure'
  },
];

const seedProducts = () => User.bulkCreate(userData);

module.exports = seedProducts;
