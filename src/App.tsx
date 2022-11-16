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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
