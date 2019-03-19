import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct.js';
import ProductsList from './components/ProductsList.js';
import SingleProduct from './components/SingleProduct.js';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (index) => {
    let tempProducts = [...products];
    tempProducts.splice(index, 1);
    setProducts(tempProducts);
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
            render={({ match }) => <SingleProduct product={products.find((p) => p.slug === match.params.slug)} />} 
          />
        </main>
      </div>
    </Router>
  );
};

export default App;
