const { Post } = require('../models');

const postData = [
  {
    title: 'greatest',
    content: 'dude of all time',
    userId: 1,
  },
  {
    title: 'greatests',
    content: 'dude of all timez',
    userId: 2,
  }, {
    title: 'greatestss',
    content: 'dude of all timezz',
    userId:3,
  },
];

const seedCategories = () => Post.bulkCreate(postData);

module.exports = seedCategories;
