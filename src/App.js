import React from 'react';
import Nav from './components/Nav';
import Slider from './components/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import Banner from './components/Banner';
import About from './components/About';
import Branches from './components/Branches';
function App() {
  return (
    <div className="App">
     <Nav/>
     <Banner  className='pb-50'/>
     <Slider className='p-12'/>
     <About className='p-12'/>
     <Branches className='p-12'/>
 
    </div>
  );
}

export default App;
