const { User } = require('../models');

const userData = [
  {
    username: 'testuser1',
    password: 'supersecure'
  },
  {
    username: 'testuser2',
    password: 'supersecure'
  },
  {
    username: 'testuser3',
    password: 'supersecure'
  },
];

const seedProducts = () => User.bulkCreate(userData);

module.exports = seedProducts;
