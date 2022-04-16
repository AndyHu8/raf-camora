import React from 'react';
import ReactDOM from 'react-dom';
import CreditsBalken from './components/CreditsBalken';
import Home from './components/Home';
import KachelFlexbox from './components/KachelFlexbox';
import Navigation from './components/Navigation';
import Biografie from './components/Biografie';
import QuickLinks from './components/QuickLinks';
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Navigation/>
    <CreditsBalken/>
    <Home/>
    <Biografie/>
    <KachelFlexbox/>
    <QuickLinks/>
  </React.StrictMode>,
  document.getElementById('root')
);
