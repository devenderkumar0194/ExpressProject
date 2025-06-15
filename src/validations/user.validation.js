const Joi = require('joi');

const registerSchema = Joi.object({ 
    name: Joi.string().required(), 
    email: Joi.string().required().email(), 
    password: Joi.string().required(), 
    confirm_password: Joi.string().valid(Joi.ref('password')).required()    
});

const loginSchema = Joi.object({ 
    email: Joi.string().required().email(), 
    password: Joi.string().required(), 
});


module.exports = {
    registerSchema,
    loginSchema

}

