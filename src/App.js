import React from 'react';
import { LandingPage } from '../src/LandingPage';
import eclipes from '../src/images/Eclipse.png';
import eclipes2 from '../src/images/eclipse2.png';

import './App.css';

function App() {
  return (
    <div class="container">
    <img src={eclipes2} alt=''/>
    <img src={eclipes} alt=''/>
    <div className='content'>
      <LandingPage />
    </div>
    </div>
  );
 
}

export default App;

