import React, { useState } from 'react';

const slugify = (str) => {
  str = str || '';
  const a =
    'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;άαβγδεέζήηθιίϊΐκλμνξοόπρσςτυϋύΰφχψωώ';
  const b =
    'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------aavgdeeziitiiiiklmnxooprsstyyyyfhpoo';
  const p = new RegExp(a.split('').join('|'), 'g');

  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ου/g, 'ou')
    .replace(/ευ/g, 'eu')
    .replace(/θ/g, 'th')
    .replace(/ψ/g, 'ps')
    .replace(/\//g, '-')
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special chars
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
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
