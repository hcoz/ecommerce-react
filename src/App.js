import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct.js';
import ProductsList from './components/ProductsList.js';
import SingleProduct from './components/SingleProduct.js';
import Cart from './components/Cart.js';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('products')) || []);
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, [])
  
  const addProduct = (product) => {
    let newProducts = [...products, product];
    setProducts(newProducts);
    localStorage.setItem('products', JSON.stringify(newProducts));
  };

  const deleteProduct = (index) => {
    let tempProducts = [...products];
    tempProducts.splice(index, 1);
    setProducts(tempProducts);
    localStorage.setItem('products', JSON.stringify(tempProducts));
  };

  const addToCart = ({ product, quantity }) => {
    let tempCart = [...cart];
    let index = tempCart.findIndex(itemInCart => itemInCart.product.slug === product.slug);
    if (index > -1) {
      tempCart[index].quantity++;
    } else {
      tempCart.push({ product: product, quantity: quantity});
    }
    setCart(tempCart);
    localStorage.setItem('cart', JSON.stringify(tempCart));
  };

  return (
    <Router>
      <div>
        <aside>
          <Link to="/">Products</Link>
          <Link to="/add-product">Add Product</Link>
        </aside>

        <main>
          <Route 
            exact path="/" 
            render={({ history }) => <ProductsList products={products} deleteProduct={deleteProduct} history={history} />} 
          />
          <Route 
            path="/add-product"
            render={({ history }) => <AddProduct addProduct={addProduct} history={history} />} 
          />
          <Route 
            path="/product/:slug"
            render={({ match }) => (
              <SingleProduct 
                product={products.find((p) => p.slug === match.params.slug)} 
                addToCart={addToCart} />)} 
          />
          <Cart cart={cart} />
        </main>
      </div>
    </Router>
  );
};

export default App;
