const Joi = require('joi');


// const schema = Joi.object({
//     name: Joi.string().min(3).max(30).required(),
//     age: Joi.number().integer().min(1).max(120).required(),
//     email: Joi.string().email().required()
// });

const addProductSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),
    price: Joi.number().integer().min(1).required(),
    description: Joi.string().min(3).max(500).allow('')
});


module.exports = {
    addProductSchema,
    // loginSchema
    // addProduct

}

