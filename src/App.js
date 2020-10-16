import React from 'react';
import './App.css';

import Nav from './Components/Nav'
import Header from './Components/Header'
import Company from './Components/Company'
import Social from './Components/Social'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Company />
      <Social />
      <About />
      <Contact />

    </div>
  );
}

export default App;
