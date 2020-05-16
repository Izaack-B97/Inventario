const getData = async function(endpoint){
    console.log('Hola');
    try {
        return await axios.get(`http://localhost:8000/${endpoint}`);
    } catch (error) {
         throw new Error(`Ha ocurrido un error: ${error}`);
    }
};