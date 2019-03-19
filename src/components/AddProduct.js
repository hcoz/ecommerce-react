import React, { useState } from 'react';

const slugify = (str) => {
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ /g, '-');
};

export default (props) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
  const [image, setImage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addProduct({ name, price, desc, image, slug: slugify(name) });
    props.history.push('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <div>
          <label>Name:</label>
          <input required onChange={(e) => { setName(e.target.value); }} />
        </div>
        <div>
          <label>Price in $:</label>
          <input required onChange={(e) => { setPrice(e.target.value); }} />
        </div>
        <div>
          <label>Description:</label>{' '}
          <textarea required onChange={(e) => { setDesc(e.target.value); }} />
        </div>
        <div>
          <label>Image URL:</label>
          <input required onChange={(e) => { setImage(e.target.value); }} />
        </div>
        <input type="submit" value="Add" className="button" />
      </form>
    </div>
  );
};
