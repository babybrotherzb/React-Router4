import React from 'react'
import Router from './router'
import './App.css'
import {BackImg } from  './components/BackImg'

function App() {
  BackImg({content: 'baby张'})
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
