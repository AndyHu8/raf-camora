import React from 'react';
import ReactDOM from 'react-dom';
import CreditsBalken from './components/CreditsBalken';
import Home from './components/Home';
import KachelFlexbox from './components/KachelFlexbox';
import Navigation from './components/Navigation';
import Biografie from './components/Biografie';
import QuickLinks from './components/QuickLinks';
import "./index.css"
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navigation/>
    <Home/>
    <Biografie/>
    <KachelFlexbox/>
    <QuickLinks/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
