const admin_firebase = require('firebase-admin');

// Inicializamos la conexion con firebase
const serviceAccount = require('../inventariocerrajeria-firebase-adminsdk-mpm9t-122fcd3723.json');
const url_db = 'https://inventariocerrajeria.firebaseio.com/';

admin_firebase.initializeApp({
    credential: admin_firebase.credential.cert(serviceAccount),
    databaseURL: url_db
});

module.exports = admin_firebase;