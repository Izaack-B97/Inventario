require('dotenv').config();
require('./private/database');

const routerModulos = require('./routes/modulos');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8000)

// Middlewars
app.use(express.static(path.join(__dirname, 'public'))); //Middleware que montara al servidor archivos estaticos


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Nos permitira leer los parametros que mandan en una peticion post
app.use(morgan('dev')); // Utiliza morgan en forma de desarrollo, muestra las peticiones en consola

// Global Variables


// Routes
app.use(routerModulos);

// Ejecutamos el server
app.listen(app.get('port'), () => {
    console.log('El servidor esta corriendo en el puerto -> ', app.get('port'));
});  