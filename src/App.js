import React from 'react';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Donation from './components/Donation';
import Header from './components/Header';
import Gallery from './components/Gallery';
import NewsEvents from './components/NewsEvents';
import OldageHome from './components/OldageHome';
import Secretary from './components/Secretary';
import Activity from './components/Activity';
import Contact from './components/Contact';

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
          <Route path="/Activity" element={<Activity/>} />
          <Route path="/Secretary" element={<Secretary/>} />
          <Route path="/Donation" element={<Donation/>} />
          <Route path="/Gallery" element={<Gallery/>} />
          <Route path="/NewsEvents" element={<NewsEvents/>} />
          <Route path="/Contact" element={<Contact/>} />
          
          <Route Path="/OldageHome" element={<OldageHome/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
