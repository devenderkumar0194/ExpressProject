const { number } = require('joi');
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique : true,
        min: 3,
        max: 100
    },

    price: {
        type: Number,
        required: true,
        min: 0,
    },

    description: {
        type: String,
        required: false,
        min: 3,
        max: 500
    },

    status: {
        type: String,
        enum : ['active','deactive'],
        default: 'deactive'
    },

  },
  {
    timestamps: true
  }
);

const ProductModal = mongoose.model('Product', ProductSchema);
module.exports = ProductModal;