import React from 'react';
import ReactDOM from 'react-dom';
import CreditsBalken from './components/CreditsBalken';
import Home from './components/Home';
import Navigation from './components/Navigation';
import QuickLinks from './components/QuickLinks';
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Navigation/>
    <CreditsBalken/>
    <Home/>
    <QuickLinks/>
  </React.StrictMode>,
  document.getElementById('root')
);
