const Automotriz = require('../private/models/automoviles'); 

const express = require('express');
const router = express.Router();


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

    Automotriz.find()
        .then(result => {
            let data = result;
            res.render('modulos/listado_automotrices', {'js_src': js, 'data': data}); 
        })
        .catch(er => {
            console.log(err);
        });
});

router.post('/automotrices', async (req, res) => {
    try {   
        let { clave, precio, existencia, tipo, control } = req.body;
        console.log(req.body);
        
        let newRegister = new Automotriz({ clave, precio, existencia, tipo, control });
        // Guardamos el nuevo registro
        let result = await newRegister.save();
        console.log(result);
        res.redirect('/automotrices');
    } catch (error) {
        console.log(error);
    }
 
});

router.delete('/automotrices/:id', (req, res) => {
    let id = req.params.id;
    
    Automotriz.findByIdAndDelete(id)
        .then(result => {
            req.flash('success_msg', `Se ha eliminado correctamente`);
            res.redirect('/automotrices');
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