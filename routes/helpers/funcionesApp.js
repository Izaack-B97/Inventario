const axios = require('axios');

module.exports = {
    getData: async (ruta) => {
        try {
            return await axios.get(`${process.env.APP_URL}${ruta}`);
        } catch(err) {
            throw new Error(`Ha ocurrido un error: ${err}`);
        }
    },

    // postOnDB: async (ruta, datos) => {
    //     try {
    //         return await axios.post(`${process.env.APP_URL}${ruta}`, datos);
    //     } catch(err) {
    //         throw new Error(`Ha ocurrido un error: ${err}`);
    //     }
    // },

    // putToApi: async (ruta, datos) => {
    //     try {
    //         return await axios.put(`${process.env.APP_URL}${ruta}`, datos);
    //     } catch(err) {
    //         throw new Error(`Ha ocurrido un error: ${err}`);
    //     }
    // }
};