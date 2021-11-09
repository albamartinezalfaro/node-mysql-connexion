const app = require('./config/server'); // archivo configuracion express

require('./app/routes/news')(app);

// starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});