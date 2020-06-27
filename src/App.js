import React from 'react';
// import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Work from './Components/Work';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
