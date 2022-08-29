import React from 'react';
import { AboutUs, FindUs, Footer, Gallery, Header, Laurels, Significantwork,Explore } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Significantwork />
    <Laurels />
    <Gallery />
    <Explore/>
    <FindUs />
    <Footer />
  </div>
);

export default App;
