'use strict';

// const uuid = require('uuid/v4');

const schema = require('./products-schema.js');

class Products {

  constructor() {
    this.database = [];
  }

  get(_id) {
    let query = _id ? {_id} : {};
    return schema.find(query);
  }
  
  post(entry) {
    let newEntry = new schema(entry);
    return newEntry.save();
  }

  put(_id, entry) {
    return schema.findByIdAndUpdate(_id, entry, {new:true});
  }

  delete(_id) {
    return schema.findByIdAndDelete(_id);
  }

  sanitize(entry) {
    let valid = true;
    let record = {};

    Object.keys(schema).forEach( field => {
      if ( schema[field].required ) {
        if (entry[field]) {
          record[field] = entry[field];
        } else {
          valid = false;
        }
      }
      else {
        record[field] = entry[field];
      }
    });

    return valid ? record : undefined;
  }

}

module.exports = Products;
