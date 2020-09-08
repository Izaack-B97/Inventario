const mongoose = require('mongoose');
const chalk = require('chalk');

const MONGODB_HOST = process.env.MONGODB_HOST;
const MONGODB_DATABASE = process.env.MONGODB_DATABASE;

const MONGODB_URI = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;

// console.log(MONGODB_URI);

mongoose.connect(MONGODB_URI,
    {
        useNewUrlParser: true ,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log(chalk.blue('DATABASES IS CONNECTED'));
    })
    .catch(err => {
        console.log(`Error en la bd: ${err}`); 
    });


