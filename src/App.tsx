import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Store } from './components/Store';
import { NotFound } from './components/NotFound';
import { About } from './components/About';
import  Cart  from './components/Cart';
import CartProvider from './contexts/cart';
import { Checkout } from './components/Checkout';

function App() {
  return (
    <div className="App">
        <CartProvider>   
          <Navbar />
          <Container className="mb-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </CartProvider>
    </div>
  );
}

export default App;
