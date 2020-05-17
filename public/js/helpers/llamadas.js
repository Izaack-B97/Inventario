// Trae informacion de la bd
const getData = async function(endpoint){
    try {
        return await axios.get(`${APP_URL}${endpoint}`);
    } catch (error) {
         throw new Error(`Ha ocurrido un error: ${error}`);
    }
};
// Crea un nuevo registro
const postOnDB = async function(endpoint, datos){
    try {
        return await axios.post(`${APP_URL}${endpoint}`, datos);
    } catch (error) {
        throw new Error(`Ha ocurrido un error: ${error}`);
    }
}
// Edita un registro
const putOnDB = async function(endpoint, datos){
    try {
        return await axios.put(`${APP_URL}${endpoint}`, datos);
    } catch (error) {
        throw new Error(`Ha ocurrido un error: ${error}`);
    }
}
// Elimina un registro
const deleteOnDB = async function(endpoint){
    try {
        return await axios.delete(`${APP_URL}${endpoint}`);
    } catch (error) {
        throw new Error(`Ha ocurrido un error: ${error}`);
    }
}

