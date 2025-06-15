const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const validate = require('../middlewares/validate.middleware');
const { addProductSchema } = require('../validations/product.validation');
const authenticateJWT = require('../middlewares/auth.middleware');


router.get('/', productController.list);

router.use(authenticateJWT);
router.post('/add', validate(addProductSchema), productController.add);


module.exports = router;
