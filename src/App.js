import './App.css';
import React, { useCallback } from 'react';
import Header from './components/header';
import Introduction from './components/introduction';
import Particles from 'react-tsparticles';
import Work from './components/work';
import About from './components/about';
import { loadFull } from 'tsparticles';
import particlesOptions from './config/particlesjs-config.json';

function App() {
  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <div className="App">
      <Header />
      <main className='mainContainer'>
        <Particles options={particlesOptions}
          init={particlesInit}
          width='100%'
          height='1000px'
          style = {{
            position: 'absolute'
          }} />
        <Introduction />
        <About />
        <Work />
      </main>
    </div>
  );
}

export default App;
