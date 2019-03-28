'use strict';

const Categories = require('../categories.js');

let categories = new Categories();

describe('Categories', () => {

  it('post() ==> can create a category', () => {
    let category = { name: 'Caverna'};
    let createdCategory = categories.post(category);
    expect(createdCategory.name).toEqual(category.name);
  });

  it('get() ==> can get a list of categories', () => {
    let categoryList = categories.get();
    expect(Array.isArray(categoryList)).toBeTruthy();
  });

  it('get(id) ==> can get a single category', () => {
    let category = { name: 'BamBoozle'};
    let createdCategory = categories.post(category);
    let foundCategory = categories.get(createdCategory.id);
    expect(foundCategory.id).toEqual(createdCategory.id);
  });

  it('put(id,record) ==> can update a category', () => {
    // Create a category for put to update
    let category = { name: 'Catan'};
    let createdCategory = categories.post(category);
    let createdId = createdCategory.id;

    // Create an updated category to put
    let updatedCategory = {...createdCategory, name: 'Evolution'};
    let updatedId = updatedCategory.id;
    categories.put(createdCategory.id, updatedCategory);

    expect(updatedId).toEqual(createdId);
    expect(updatedCategory.name).not.toEqual(createdCategory.name);
  });

  it('delete(id) ==> can delete a category', () => {
    let category1 = { name: 'Monopoly'};
    let createdCategory1 = categories.post(category1);
    let deletedCategory = categories.delete(createdCategory1.id);
    expect(deletedCategory).toEqual({});
  });
  
});