import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import './App.css';
import Routers from './routes';
import GoToButton from './Components/GoToTop';

function App() {
  const backToTop = useRef(null);

  // Init AOS Animation
  useEffect(() => {
      AOS.init({
      });
  }, []);

  return (
    <div className='App' ref={backToTop}>
      <Routers />
      <GoToButton displayAfter={200} target={backToTop} />
    </div>
  )
}

export default App;