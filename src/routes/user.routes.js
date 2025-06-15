const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validate = require('../middlewares/validate.middleware');
const { registerSchema, loginSchema } = require('../validations/user.validation');
const authenticateJWT = require('../middlewares/auth.middleware');


router.post('/register', validate(registerSchema), userController.register);
router.post('/login', validate(loginSchema), userController.login);


router.get('/profile', authenticateJWT, userController.profile);




module.exports = router;
