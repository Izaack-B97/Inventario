let express = require('express');

let app = express();

app.set('view engine', 'pug');

// Carpeta donde se estaran los recursos estaticos
app.use(express.static('public')); //Middleware que montara al servidor archivos estaticos

app.get('/', (req, res) => {
    let listado = [
        { js: '/js/index.js' }
    ];
    res.render('index', {'js_src': listado});
});

app.get('/automotrices', (req, res) => { res.render('modulos/listado_automotrices'); });
app.get('/carcasas', (req, res) => { res.render('modulos/listado_carcasas'); });
app.get('/controles', (req, res) => { res.render('modulos/listado_controles'); });
app.get('/servicios', (req, res) => { res.render('modulos/listado_servicios'); });
app.get('/residenciales', (req, res) => { res.render('modulos/listado_residenciales'); });



app.listen(8080, () => {
    console.log('El servidor esta corriendo en el puerto -> 8080');
});  