const ProductoData = require('../data/producto.data');

// Crear un producto
exports.createProduct = async (req, res) => {
    
    try {
        const newProduct = await Producto.findOne({stock: stock});
        if (newProduct) {
            return res.status(400).json({ error: 'El producto ya se encuentra registrado' });
        }
        const producto = await Producto.createProducto(req.body);
        return res.status(200).json({ mensaje: 'Producto creado con éxito'});
        // return res.redirect('/productos');
    } catch (error) {
        console.error(error);
        return res.render('500', {error: error});
        };  
};

// Obtener todos los productos
exports.getAllProducts = async (req, res) => {
    try {
        const productos = await Producto.find().populate('vendedor');
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener un producto por ID
exports.getProductById = async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id).populate('vendedor');
        if (!producto) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un producto
exports.updateProduct = async (req, res) => {
    try {
        const updateFields = {
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            stock: req.body.stock,
            vendedor: req.body.vendedor,
            categoria: req.body.categoria,
            color: req.body.color,
            en_oferta: req.body.en_oferta,
            precio_original: req.body.precio_original,
            descuento: req.body.descuento
        };

        // Elimina campos undefined para evitar sobreescribir con undefined
        Object.keys(updateFields).forEach(
            key => updateFields[key] === undefined && delete updateFields[key]
        );

        const productoActualizado = await Producto.findByIdAndUpdate(
            req.params.id,
            updateFields,
            { new: true, runValidators: true }
        );
        if (!productoActualizado) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.status(200).json({ mensaje: 'Producto actualizado', producto: productoActualizado });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un producto
exports.deleteProduct = async (req, res) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
        if (!productoEliminado) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.status(200).json({ mensaje: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};