import React from 'react';
import ReactDOM from 'react-dom';
import CreditsBalken from './components/CreditsBalken';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

ReactDOM.render(
  <React.StrictMode>
    <Navigation/>
    <CreditsBalken/>
    <Home/>
    <Sidebar/>
  </React.StrictMode>,
  document.getElementById('root')
);
