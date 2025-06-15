const Joi = require('joi');

const addProductSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    price: Joi.number().integer().min(1).required(),
    description: Joi.string().min(3).max(500).allow('')
});


module.exports = {
    addProductSchema,

}

