import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import AddProduct from './components/AddProduct.js';
import ProductsList from './components/ProductsList.js';
import SingleProduct from './components/SingleProduct.js';
import './App.css';

const App = () => {
  const [products, setProducts] = useState();
  
  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  return (
    <Router>
      <div>
        <aside>
          <Link to="/">Products</Link>
          <Link to="/add-product">Add Product</Link>
        </aside>

        <main>
          <Route exact path="/" component={ProductsList} />
          <Route 
            path="/add-product"
            render={({ history }) => <AddProduct addProduct={addProduct} history={history} />} />
          <Route path="/product/:slug" component={SingleProduct} />
        </main>
      </div>
    </Router>
  );
};

export default App;
