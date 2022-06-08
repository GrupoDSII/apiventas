const Joi = require("joi");

const id = Joi.string().uuid();
const nombre = Joi.string().alphanum().min(3).max(30);
const precio = Joi.number().integer().min(5).max(200);

const crearProductoSchema = Joi.object({
  nombre : nombre,
  precio : precio
});

const actualizarProductoSchema = Joi.object({
  id : id.required(),
  nombre,
  precio
});

const eliminarProductosSchema = Joi.object({
  id : id.required()
});


const findByProductoSchema = Joi.object({
  id : id.required()
});

module.exports = {crearProductoSchema,actualizarProductoSchema,eliminarProductosSchema,findByProductoSchema};
