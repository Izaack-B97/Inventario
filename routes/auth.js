const express = require('express');
// const admin = require('firebase-admin');
// const auth = admin.auth(); // Autentificacion
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    let correo = req.body.correo;
    let password = req.body.password;

    res.send('loggeado');
    // auth.singInWithEmail(correo, password)
    //     .then(resp => {
    //         res.send('loggueado');
    //     })
    //     .catch(err => {
    //         console.log(`Error ${err}`);
    //     });
})

module.exports = router;