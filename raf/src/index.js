import React from 'react';
import ReactDOM from 'react-dom';
import CreditsBalken from './components/CreditsBalken';
import Navigation from './components/Navigation';

ReactDOM.render(
  <React.StrictMode>
    <CreditsBalken/>
    <Navigation/>
  </React.StrictMode>,
  document.getElementById('root')
);
