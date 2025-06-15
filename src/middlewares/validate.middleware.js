const validate = (schema) => {

    return (req, res, next) => {

    if (!req.body || typeof req.body !== 'object') {
      return res.status(400).json({
        message: 'Request body is missing or invalid',
      });
    }
    
    const { error } =  schema.validate(req.body, { abortEarly: true });

    if (error) {
      return res.status(400).json({
        message: 'Validation failed',
        details: error.details.map((detail) => detail.message),
      });
    }

    next();
  };
};

module.exports = validate;
