const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: 1,
        maxlength: 100
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        minlength: 1,
        maxlength: 254
    },
    stock: {
        type: Number,
        required: [true, 'El stock es obligatorio'],
        min: [0, 'El stock no puede ser negativo.']
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio'],
        min: [0, 'El precio no puede ser negativo.']
    },
    
});


const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;