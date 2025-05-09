const modeloProducto = require('../models/producto_models');


exports.consultar = async (re, res)=>{
    let listaProductos = await modeloProducto.find({});
    console.log(listaProductos)
    if (listaProductos){
        res.json(listaProductos)
    } else {
        res.json({"error": "hubo un error"})
    }
}
