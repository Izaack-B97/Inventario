const Automotriz = require('../../private/models/automoviles');

const express = require('express');
const router = express.Router();


// Rutas Automotrices para DB

router.get('/automotrices/data', (req, res) => {
    Automotriz.find()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(`Ha ocurrido un error: ${err}`);
        })
});

router.get('/automotrices/data/:id', (req, res) => {
    let id = req.params.id;

    Automotriz.findById(id)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(`Ha ocurrido un error: ${err}`);
        })
});

router.post('/automotrices/crear', (req, res) => {
    let data = req.body;

    let newRegister = new Automotriz(data);
    newRegister.save()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(`Ha ocurrido un error ${err}`);
        });
});

router.put('/automotrices/edit/:id', (req, res) => {
    let id = req.params.id;
    let data = req.body;
    
    Automotriz.updateOne({_id: id}, data)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(`Ha ocurrido un error: ${err}`);
        })
});

router.delete(`/automotrices/delete/:id`, (req, res) => {
    let id = req.params.id;
    Automotriz.findByIdAndDelete(id)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(`Ha ocurrido un error: ${err}`);
        });
});


// Rutas Carcasas para DB

// Rutas Controles para DB

// Rutas Residencial para DB

// Rutas Servicios para DB

module.exports = router;
