const Product = require('../models/product.model');
const CustomError = require('../utils/customError');
// const bcrypt = require('bcryptjs');
// const { generateToken } = require('../utils/token');

const add = async (user,data) => {
    const product = await Product.findOne({title : data.title});
    if(product){
       throw new CustomError('product already exists', 409);
    }    

    data["user"] = user._id;
    const newProduct = new Product(data);
    return await newProduct.save();
};

const list = async (user) => {
    const products = await Product.find().sort({ createdAt : -1 }).limit(12).populate('user');
    return products;
};

module.exports = {
  add,
  list
}