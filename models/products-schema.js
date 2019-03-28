'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  id: {required:true},
  name: {require:true},
});

module.exports = mongoose.model('products', products);