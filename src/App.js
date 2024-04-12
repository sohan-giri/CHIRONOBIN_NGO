import React from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Donation from './components/Donation';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Donation" element={<Donation/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
