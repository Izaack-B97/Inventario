require('dotenv').config();
require('./private/database');
const routerRutasHelpers = require('./routes/helpers/rutasHelpers');
const routerModulos = require('./routes/modulos');
const flash = require('connect-flash');
const session = require('express-session');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const express = require('express');

// Initializations
const app = express();

// Settings
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8000)
app.use(express.static('public')); //Middleware que montara al servidor archivos estaticos
app.set('public', __dirname + '/public');

// Middlewars
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Nos permitira leer los parametros que mandan en una peticion post
app.use(morgan('dev')); // Utiliza morgan en forma de desarrollo, muestra las peticiones en consola
app.use(session({
    secret: 'palabra-secreta-2020',
    resave: true,
    saveUninitialized: true
}));
app.use(flash()); /* Guarda el mensaje en el servidor*/


// Variables Globales
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');    
    console.log(res.locals.success_msg);
    
    next();
});

// Routes
app.use(routerModulos);
app.use(routerRutasHelpers);


// Ejecutamos el server
app.listen(app.get('port'), () => {
    console.log('El servidor esta corriendo en el puerto -> ', app.get('port'));
});  