import React from 'react';
import { AboutUs, FindUs, Footer, Gallery, Header, Laurels, Significantwork,Explore } from './container';
import { Navbar, Navbar2 } from './components';
import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from './components/LoginPage/login';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Significantwork />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />

  </div>
);

export default App;
