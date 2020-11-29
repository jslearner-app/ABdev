import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import { useMediaQuery } from 'react-responsive';

function App() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
})
const isBigScreen = useMediaQuery({ query: '(min-device-width: 1024px)' })
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 480px)'
})
const isPortrait = useMediaQuery({ query: '(min-device-width: 768px)' })
const isRetina = useMediaQuery({ query: '(max-device-width: 1024px)' })
  return (
   
    <div className="App">
      <Navbar isDesktopOrLaptop = {isDesktopOrLaptop} isTabletOrMobile = {isTabletOrMobile} isBigScreen = {isBigScreen} isTabletOrMobileDevice = {isTabletOrMobileDevice} isPortrait = {isPortrait} isRetina = {isRetina} />
      <div className="App-header">
      <Header isTabletOrMobileDevice = {isTabletOrMobileDevice} />
      </div>
      
      <div className='About'>
        <About isDesktopOrLaptop = {isDesktopOrLaptop} isTabletOrMobile = {isTabletOrMobile} isBigScreen = {isBigScreen} isTabletOrMobileDevice = {isTabletOrMobileDevice} isPortrait = {isPortrait} isRetina = {isRetina} />
      </div>
      <div className='work'>
        <Work isDesktopOrLaptop = {isDesktopOrLaptop} isTabletOrMobile = {isTabletOrMobile} isBigScreen = {isBigScreen} isTabletOrMobileDevice = {isTabletOrMobileDevice} isPortrait = {isPortrait} isRetina = {isRetina} />
      </div>
      <div className='contact'>
        <Contact isDesktopOrLaptop = {isDesktopOrLaptop} isTabletOrMobile = {isTabletOrMobile} isBigScreen = {isBigScreen} isTabletOrMobileDevice = {isTabletOrMobileDevice} isPortrait = {isPortrait} isRetina = {isRetina} />
        
      </div>
      
     
    </div>
  );
}

export default App;
