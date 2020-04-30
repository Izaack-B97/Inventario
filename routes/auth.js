const express = require('express');
const auth = require('../private/firebase').auth();
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
});

// router.post('/login', (req, res) => {
//     let correo = req.body.correo;
//     let password = req.body.password;

//     auth.signInWithEmailAndPassword(correo, password)
//         .then(result => {
//             console.log('loggueado');

//         })
//         .catch(function(error) {

//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//       });

// });

module.exports = router;