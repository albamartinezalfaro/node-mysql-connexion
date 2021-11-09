// Archivo de rutas
const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  /* app.get('/', (req, res) => {
    res.send('Hello World');
  }); */

   app.get('/', (req, res) => {
    res.render('news/news');
  }); 

  const connection = dbConnection();

  app.get('/news', (req, res) => {
    connection.query('SELECT * FROM news', (err, result) => {
      res.render('news/news', {
        news: result
      });
    });
  });

  app.post('/news', (req, res) => {
    const { title, news } = req.body;
    connection.query('INSERT INTO news SET ? ',
      {
        title,
        news
      }
    , (err, result) => {
      res.redirect('/news');
    });
  });
};