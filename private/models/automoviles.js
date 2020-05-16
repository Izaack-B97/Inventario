const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const automovilSchema = new Schema({
    clave: {
        type: String, 
        required: true
    },
    precio: {
        type: Number,
        required: true
    }, 
    existencia: {
        type: Number,
        required: true
    }, 
    tipo: {
        type: String,
        required: true
    },
    control: {
        type: String,
        required: true 
    },
    vendidas: {
        type: Number
    }
}, {
    timestamps: true
});

const Automotriz = mongoose.model('automotriz', automovilSchema);

module.exports = Automotriz;