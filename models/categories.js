'use strict';

const uuid = require('uuid/v4');

const schema = {
  id: {required: true},
  name: {required: true},
};

class Categories {

  constructor() {
    this.database = [];
  }

  get(_id) {
    let response = _id 
      ? this.database.filter( record => record.id === _id)[0]
      : this.database;
    return response;
  }
  
  post(record) {
    record.id = uuid();
    if ( this.sanitize(record) ){
      this.database.push(record);
      return record;
    }
    else {return null;}
  }

  put(_id, record) {
    if( this.sanitize(record) ){
      this.database.map( result => result.id === _id 
        ? result = record
        :result);
    } else {
      return 'That entry is incorrect';
    }
  }

  delete(_id) {
    let response = this.database.filter( record => record.id === _id)[0];
    response = {};
    return response;
  }


  sanitize(record) {
    // let valid = true;

    // Object.keys(schema).forEach( field => {
    //   if ( schema[field].required ) {
    //     if( !record[field] ) {valid = false;}
    //   }
    // });
    // return valid;

    let valid = true;
    let entry = {};

    Object.keys(schema).forEach( field => {
      if ( schema[field].required ) {
        if (record[field]) {
          entry[field] = record[field];
        } else {
          valid = false;
        }
      }
      else {
        entry[field] = record[field];
      }
    });

    return valid ? entry : undefined;
  }

}

module.exports = Categories;
