const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

const serviceAccount = require('../inventariocerrajeria-firebase-adminsdk-mpm9t-122fcd3723.json');

// Configuramos la inicializacion en firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://inventariocerrajeria.firebaseio.com/',
});

const db = admin.database();

router.get('/', (req, res) => {
    // db.ref('catalogos_menu').once('value', snapshot => {
    //     const data = snapshot.val();

    //     data.forEach(object => {
    //         console.log(object.menu);
    //     });

    res.render('index', { data: '' });
    // });
});

router.get('/automotrices', (req, res) => { res.render('modulos/listado_automotrices'); });
router.get('/carcasas', (req, res) => { res.render('modulos/listado_carcasas'); });
router.get('/controles', (req, res) => { res.render('modulos/listado_controles'); });
router.get('/servicios', (req, res) => { res.render('modulos/listado_servicios'); });
router.get('/residenciales', (req, res) => { res.render('modulos/listado_residenciales'); });

module.exports = router;