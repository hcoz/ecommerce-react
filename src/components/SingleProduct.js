import React from 'react';

export default (props) => {
  const { product } = props;

  return (
    <div className="single-product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="description">{product.desc}</p>
      <p className="price">${product.price}</p>
    </div>
  );
}
