const productService = require('../services/product.service');

const add = async (req, res, next) => {
  try {
    const product = await productService.add(req.body);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};


const list = async (req, res, next) => {
  try {
    const products = await productService.list();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};



module.exports = {
  add,
  list
}
