import React from 'react';

export default (props) => {
  return (
    <div className="products-list">
    {props.products ?
      props.products.map((product, index) => {
        return (
          <div key={index} onClick={() => props.history.push(`/product/${product.slug}`)}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p className="description">{product.desc}</p>
            <p className="price">${product.price}</p>
            <button onClick={(e) => {
              props.deleteProduct(index);
              e.stopPropagation();
            }}>X</button>
          </div>
        );
      }) : 'No product'
    }
    </div>
  );
}
