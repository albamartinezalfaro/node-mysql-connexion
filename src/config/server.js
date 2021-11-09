// Configuracion de express
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// settings
app.set('port', process.env.PORT || 3000); // conexion puertos
app.set('view engine', 'ejs'); // motor de plantilla
app.set('views', path.join(__dirname, '../app/views')); // vistas

// middlewares
app.use(bodyParser.urlencoded({extended: false})); // no vamos a utilizar imagenes
app.use(express.static(path.join(__dirname, '../static')))

module.exports = app; // exportamos para index.js