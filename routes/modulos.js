//require('dotenv').config;
const express = require('express');
const router = express.Router();
const admin = require('../private/firebase');
const db = admin.database();

// Establecemos las rutas GET
router.get('/', (req, res) => {
    res.render('index', { data: '' });
});

router.get('/automotrices', (req, res) => { 
    let js = [
        {js: '/js/modulos/listado_automotriz.js'}
    ];

    db.ref('catalogo_automoviles').once('value', async snapshot => {    
        const data = snapshot.val();
        console.log(data);
        res.render('modulos/listado_automotrices', {'js_src': js, 'data': data}); 
    }); 
});

router.get('/carcasas', (req, res) => { 
    let js = [
        {js: '/js/modulos/listado_carcasas.js'}
    ];
    res.render('modulos/listado_carcasas', {'js_src': js}); 
});

router.get('/controles', (req, res) => { 
    let js = [
        {js: '/js/modulos/listado_controles.js'}
    ];
    res.render('modulos/listado_controles', {'js_src': js}); 
});

router.get('/residenciales', (req, res) => { 
    let js = [
        {js: '/js/modulos/listado_residenciales.js'}
    ];
    res.render('modulos/listado_residenciales', {'js_src': js}); 
});

router.get('/servicios', (req, res) => {
    let js = [
        {js: '/js/modulos/listado_servicios.js'}
    ];
    res.render('modulos/listado_servicios', {'js_src': js}); 
});


// Establecemos las rutas POST
router.post('/automotrices', (req, res) => {
    console.log(req.body);
    const newRegister = {
        clave: req.body.Clave,
        cantidad: req.body.Cantidad,
        control: req.body.Control,
        tipo: req.body.Tipo,
        precio: req.body.Precio 
    };

    // Insertamos un nuenvo registro, y lo manejamos como una promesa
    db.ref('catalogo_automoviles').push(newRegister)
        .then(resp => {
            setTimeout(() =>{ res.redirect('/automotrices'); }, 1000);
        })
        .catch(err => {
            console.log('Error: ' + err);
        });
});

module.exports = router;