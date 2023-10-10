const { Post } = require('../models');

const postData = [
  {
    title: 'greatest',
    content: 'i am the greatest dude of all time',
    userId: 1,
  },
  {
    title: 'greatests',
    content: 'no I am the greatest dude of all timez',
    userId: 2,
  }, {
    title: 'greatestss',
    content: 'nah, you guys are both wrong, i am the greatest dude of all timezz',
    userId:3,
  },
];

const seedCategories = () => Post.bulkCreate(postData);

module.exports = seedCategories;
