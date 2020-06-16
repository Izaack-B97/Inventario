const Automotriz = require('../../private/models/automoviles');

const chalk = require('chalk');
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
    console.log(chalk.green('GET en /automotrices/data/' + req.params.id));
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
    console.log(chalk.blue('POST en /automotrices/crear'));
    let data = req.body; 

    let newRegister = new Automotriz(data);
    newRegister.save()
        .then(result => {
            req.flash('success_msg', 'Registro satisfactorio de llave');
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(`Ha ocurrido un error ${err}`);
            req.flash('error_msg', err);            
        });
});

router.put('/automotrices/edit/:id', (req, res) => {
    console.log(chalk.yellow('PUT en /automotrices/edit/' + req.params.id));
    let id = req.params.id;
    let data = req.body;
    
    Automotriz.updateOne({_id: id}, data)
        .then(result => {
            req.flash('success_msg', 'Actualizaci\u00F3n Satisfactoria de Llave');           
            console.log(req.flash);
            
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(`Ha ocurrido un error: ${err}`);
        })
});

router.delete(`/automotrices/delete/:id`, (req, res) => {
    console.log(chalk.red('DELETE en /automotrices/delete/' + req.params.id));
    let id = req.params.id;
    Automotriz.findByIdAndDelete(id)
        .then(result => {
            req.flash('success_msg', 'Eliminaci\u00F3n Satisfactoria de Llave');
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
