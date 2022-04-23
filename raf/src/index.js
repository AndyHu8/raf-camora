import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import KachelFlexbox from './components/KachelFlexbox';
import Navigation from './components/Navigation/Navigation';
import Biografie from './components/Biografie/Biografie';
import QuickLinks from './components/QuickLinks';
import "./index.css"
import Footer from './components/Footer/Footer';

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
