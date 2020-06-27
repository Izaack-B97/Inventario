const axios = require('axios');

module.exports = {
    getData: async (ruta) => {
        try {
            return await axios.get(`${process.env.APP_URL}${ruta}`);
        } catch(err) {
            throw new Error(`Ha ocurrido un error: ${err}`);
        }
    }
};