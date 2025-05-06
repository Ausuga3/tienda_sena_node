const Producto = require('../models/producto_models');
// exports.createProducto = async (req, res) => {
//     try {
//         const { nombre, descripcion, stock, vendedor, categoria, color, en_oferta, precio_original, descuento } = req.body;

//         // Validar que el vendedor existe
//         if (!vendedor) {
//             return res.status(400).json({ message: 'El vendedor es obligatorio' });
//         }

//         // Crear el producto
//         const nuevoProducto = new Producto({
//             nombre,
//             descripcion,
//             stock,
//             vendedor,
//             categoria,
//             color,
//             en_oferta,
//             precio_original,
//             descuento
//         });

//         await nuevoProducto.save();

//         res.status(201).json({ message: 'Producto creado exitosamente', producto: nuevoProducto });
//     } catch (error) {
//         res.status(500).json({ message: 'Error al crear el producto', error });
//     }
// }

exports.createProducto = async (ProductoData) => {
    try {
        // Validar que el vendedor existe
        return new Producto(ProductoData).save();
    } catch (error) {
        return error;   
    }
};

exports.findProducto = async (filter, projection) => {
    try {
        if (!projection) return await Producto.findOne(filter);
        else return await Producto.findOne(filter, projection);
    } catch (error) {
        return error;
    }
};

