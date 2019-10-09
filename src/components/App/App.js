import React from 'react';
import './App.scss'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import Icons_bar from '../Icons-bar/Icons_bar'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Icons_bar />
    </div>
  );
}

export default App;
