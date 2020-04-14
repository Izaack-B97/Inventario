const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let listado = [
        { js: '/js/index.js' }
    ];
    res.render('index', {'js_src': listado});
});

router.get('/automotrices', (req, res) => { res.render('modulos/listado_automotrices'); });
router.get('/carcasas', (req, res) => { res.render('modulos/listado_carcasas'); });
router.get('/controles', (req, res) => { res.render('modulos/listado_controles'); });
router.get('/servicios', (req, res) => { res.render('modulos/listado_servicios'); });
router.get('/residenciales', (req, res) => { res.render('modulos/listado_residenciales'); });

module.exports = router;