const express = require('express');
const router = express.Router();
const app = require('../routes/helpers/funcionesApp');

// ***************** Otras Rutas  *********************** /
router.get('/', (req, res) => {
    res.render('index', { data: '' });
});

router.get('/login', (req, res) => {
    res.render('login', { data: '' });
});

router.get('/salir', (req, res) => {
    res.send('Haz salido');
});

// ***************** Rutas Automotrices  *********************** /
router.get('/automotrices', (req, res) => { 
    let js = [
        {js: '/js/modulos/listado_automotriz.js'}
    ];

    app.getData('automotrices/data')
        .then(result => {
            let data = result.data;
            res.render('modulos/automotrices/listado_automotrices', {'js_src': js, 'data': data}); 
        })
        .catch(err => {
            console.log(err);
        });
});

router.get('/automotrices/editar/:id', (req, res) => {
    let id = req.params.id;
    let js = [
        { js: '/js/modulos/editar_automotrices.js' }
    ];

    app.getData('automotrices/data/' + id)
        .then(result => {
            let data = result.data;
            res.render('modulos/automotrices/editar-automotrices', { js_src: js ,data: data });
        })
        .catch(err => {
            console.log(err);
        });

});


// ***************** Rutas Carcasas  *********************** /
router.get('/carcasas', (req, res) => { 
    let js = [
        {js: '/js/modulos/listado_carcasas.js'}
    ];
    res.render('modulos/listado_carcasas', {'js_src': js}); 
});

// ***************** Rutas Controles *********************** /
router.get('/controles', (req, res) => { 
    let js = [
        {js: '/js/modulos/listado_controles.js'}
    ];
    res.render('modulos/listado_controles', {'js_src': js}); 
});

// ***************** Rutas Residenciales  *********************** /
router.get('/residenciales', (req, res) => { 
    let js = [
        {js: '/js/modulos/listado_residenciales.js'}
    ];
    res.render('modulos/listado_residenciales', {'js_src': js}); 
});

// ***************** Rutas Servicios  *********************** /
router.get('/servicios', (req, res) => {
    let js = [
        {js: '/js/modulos/listado_servicios.js'}
    ];
    res.render('modulos/listado_servicios', {'js_src': js}); 
});

module.exports = router;