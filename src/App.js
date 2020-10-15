import React from 'react';
import './App.css';

import Nav from './Components/Nav'
import Header from './Components/Header'
import Company from './Components/Company'
import Social from './Components/Social'
import About from './Components/About'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Company />
      <Social />
      <About />
    </div>
  );
}

export default App;
