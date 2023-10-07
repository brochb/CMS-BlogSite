const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('homepage', {  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log('-----------------------------------------------------------------------')
  console.log('Test the Routes at...');
  console.log(`http://localhost:${PORT}/api/users`)
});
