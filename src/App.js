import React, { Component } from 'react';
import './style.css';

import Header from './components/header';
import Main from './pages/main';

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
