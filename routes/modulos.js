const Automotriz = require('../private/models/automoviles'); 

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', { data: '' });
});

router.get('/login', (req, res) => {
    res.render('login', { data: '' });
});


// ***************** Rutas Automotrices  *********************** /
router.get('/automotrices', (req, res) => { 
    let js = [
        {js: '/js/modulos/listado_automotriz.js'}
    ];

    Automotriz.find()
        .then(result => {
            let data = result;
            res.render('modulos/listado_automotrices', {'js_src': js, 'data': data}); 
        })
        .catch(er => {
            console.log(err);
        })

});

router.post('/automotrices', async (req, res) => {
    try {
        let { clave, precio, existencia, tipo, control } = req.body;
        let newRegister = new Automotriz({ clave, precio, existencia, tipo, control });
        // Guardamos el nuevo registro
        let result = newRegister.save();
        res.redirect('/automotrices');
    } catch (error) {
        console.log(error);
    }
 
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