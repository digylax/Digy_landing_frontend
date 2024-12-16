import React, { useEffect } from 'react';
import AOS from 'aos';
import './App.css';
import Routers from './routes';

function App() {

  // Init AOS Animation
  useEffect(() => {
      AOS.init({
      });
  }, []);

  return (
    <div className='App'>
      <Routers />
    </div>
  )
}

export default App;