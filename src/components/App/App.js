import React from 'react';
import 'normalize.css/normalize.css'
import './App.scss'
import Navigation from '../Navigation/Navigation'
import Header from '../Header/Header'
import IconsBar from '../IconsBar/IconsBar'
import Body from '../Body/Body'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <IconsBar />
      <Body />
    </div>
  );
}

export default App;
