const admin_firebase = require('firebase-admin');

// Inicializamos la conexion con firebase
const serviceAccount = require('../cerrajeria-bustamante-firebase-adminsdk-nxzi1-57e0cc2dc2.json');
const url_db = 'https://cerrajeria-bustamante.firebaseio.com/';
const config = {
    credential: admin_firebase.credential.cert(serviceAccount),
    databaseURL: url_db
}

admin_firebase.initializeApp(config);


module.exports = admin_firebase;

console.log('Hola mundo');