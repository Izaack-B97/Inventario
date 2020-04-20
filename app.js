const router = require('./routes/modulos');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// Settings
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8000)

// Middlewars
// Carpeta donde se estaran los recursos estaticos
app.use(express.static('public')); //Middleware que montara al servidor archivos estaticos
app.set('public', __dirname + '/public');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Nos permitira leer los parametros que mandan en una peticion post
app.use(morgan('dev')); // Utiliza morgan en forma de desarrollo, muestra las peticiones en consola

// Routes
app.use(router);

// Ejecutamos el server
app.listen(app.get('port'), () => {
    console.log('El servidor esta corriendo en el puerto -> ', app.get('port'));
});  