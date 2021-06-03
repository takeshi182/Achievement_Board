import React from 'react';
import './App.css';
import Buttonblue from './button-blue';
import Buttonwhite from './button-white';
import Header from './Header';
import Tablet from './Table';

function App() {
  return (
    <div className='body'>
      <Header />
      <Buttonblue />
      <Buttonwhite />
      <Tablet />
    </div>
  );
}

export default App;
