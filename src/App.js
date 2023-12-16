// src/App.js

import React from 'react';
import './components/Navbar.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './Contact';

function App() {
    return (
        <div className="App">
            <Router>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about/" element={<About />} />
                        <Route path="/portfolio/" element={<Portfolio />}  />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
            </Router>
        </div>
    );
}

export default App;
