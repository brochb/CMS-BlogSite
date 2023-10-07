const Handlebars = require('handlebars');

Handlebars.registerHelper('navMenu', (loggedIn) => {
    if (loggedIn) {
        return `
      <li><a href="/">Home</a></li>
    `;
    } else {
        return `
      <li><a href="/login">Login</a></li>
    `;
    }
});

module.exports = Handlebars;
