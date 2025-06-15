const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validate = require('../middlewares/validate.middleware');
const { registerSchema } = require('../validations/user.validation');

router.post('/register', validate(registerSchema), userController.register);


module.exports = router;
