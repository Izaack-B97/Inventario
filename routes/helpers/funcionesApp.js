const Automotriz = require('../../private/models/automoviles');

const express = require('express');
const router = express.Router();

router.get('/automotrices/data', (req, res) => {
    Automotriz.find()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(`Ha ocurrido un error: ${err}`);
        })
});

module.exports = router;

// const axios = require(axios);

// module.exports = {
//     getFromDatabase: async (ruta) => {
//         try {
//             return await axios.get(`http://localhost:8000/${ruta}`);
//         } catch (err) {
//             console.log(`Ha ocurrido un error ${err}`);
//         }
//     },

//     postToDatabase: async (ruta) => {
//         try {
//             return await axios.post(`http://localhost:8000/${ruta}`);
//         } catch (err) {
//             console.log(`Ha ocurrido un error ${err}`);
//         }
//     },

//     putToDatabase: async (ruta) => {
//         try {
//             return await axios.put(`http://localhost:8000/${ruta}`);
//         } catch (err) {
//             console.log(`Ha ocurrido un error ${err}`);
//         }
//     },

//     deleteToDatabase: async (ruta) => {
//         try {
//             return await axios.delete(`http://localhost:8000/${ruta}`);
//         } catch (err) {
//             console.log(`Ha ocurrido un error ${err}`);
//         }
//     },
// };