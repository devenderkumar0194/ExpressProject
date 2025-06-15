const productService = require('../services/product.service');

const add = async (req, res, next) => {
  try {
    const authUser = req.user;
    const product = await productService.add(authUser, req.body);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};


const list = async (req, res, next) => {
  try {
    const authUser = req.user;
    const products = await productService.list(authUser);
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};



module.exports = {
  add,
  list
}
