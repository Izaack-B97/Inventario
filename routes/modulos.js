//require('dotenv').config;
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { data: '' });
});

router.get('/automotrices', (req, res) => { 
    let js = [
        {js: '/js/modulos/listado_automotriz.js'}
    ];
    res.render('modulos/listado_automotrices', {'js_src': js}); 
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

module.exports = router;