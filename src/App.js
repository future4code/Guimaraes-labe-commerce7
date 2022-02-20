import './App.css';
import Header from './components/header';
import Footer from './components/footer'
import Home from './components/home'
import About from './components/sobre'
import Product from './components/product'
import Contact from './components/contato'
import { Redirect, Route, Routes } from 'react-router-dom';
import ProductDetail from './components/productDetail';
import Cart from './components/cart';
import Checkout from './components/checkout'
import React from 'react';

class App extends React.Component{
  render(){
    return (
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route  path="/products" element={<Product/>} />
          <Route  path="/products/:id" element={<ProductDetail/>} />
          <Route  path="/cart" element={<Cart/>} />
          <Route  path="/checkout" element={<Checkout/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/contact" element={<Contact/>}/>
          <Route to="/" />
        </Routes>
        <Footer/>
      </>
    );

  }
  
}

export default App;
