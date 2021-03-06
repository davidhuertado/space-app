import '../styles/App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Aside from './Aside';
import Destination from './Destination';
import Crew from './Crew';
import Technologies from './Technologies';

import { Route, Routes, useLocation } from 'react-router-dom';
import data from '../data.json';
//Images
import backgroundHomeDesktop from '../assets/home/background-home-desktop.jpg';
import backgroundHomeTablet from '../assets/home/background-home-tablet.jpg';
import backgroundHomeMobile from '../assets/home/background-home-mobile.jpg';
import backgroundDestinationMobile from '../assets/destination/background-destination-mobile.jpg';
import backgroundDestinationTablet from '../assets/destination/background-destination-tablet.jpg';
import backgroundDestinationDesktop from '../assets/destination/background-destination-desktop.jpg';
import backgroundCrewMobile from '../assets/crew/background-crew-mobile.jpg';
import backgroundCrewTablet from '../assets/crew/background-crew-tablet.jpg';
import backgroundCrewDesktop from '../assets/crew/background-crew-desktop.jpg';
import backgroundTechnologyDesktop from '../assets/technology/background-technology-desktop.jpg';
import backgroundTechnologyTablet from '../assets/technology/background-technology-tablet.jpg';
import backgroundTechnologyMobile from '../assets/technology/background-technology-mobile.jpg';

function App() {
  const [hiddenAside, setHiddenAside] = useState(true);
  //state for setting background
  const [appBackground, setAppBackground] = useState(null);
  const getViewport = () => {
    const viewportWidth = window.innerWidth;
    if (viewportWidth < 600) return 'mobile';
    else if (viewportWidth < 992) return 'tablet';
    else return 'desktop';
  };

  let { pathname } = useLocation();

  useEffect(() => {
    let viewport = getViewport();
    if (pathname === '/' && viewport === 'mobile') {
      setAppBackground(backgroundHomeMobile);
    } else if (pathname === '/' && viewport === 'tablet') {
      setAppBackground(backgroundHomeTablet);
    } else if (pathname === '/' && viewport === 'desktop') {
      setAppBackground(backgroundHomeDesktop);
    } else if (pathname === '/destination' && viewport === 'mobile') {
      setAppBackground(backgroundDestinationMobile);
    } else if (pathname === '/destination' && viewport === 'tablet') {
      setAppBackground(backgroundDestinationTablet);
    } else if (pathname === '/destination' && viewport === 'desktop') {
      setAppBackground(backgroundDestinationDesktop);
    } else if (pathname === '/crew' && viewport === 'mobile') {
      setAppBackground(backgroundCrewMobile);
    } else if (pathname === '/crew' && viewport === 'tablet') {
      setAppBackground(backgroundCrewTablet);
    } else if (pathname === '/crew' && viewport === 'desktop') {
      setAppBackground(backgroundCrewDesktop);
    } else if (pathname === '/technologies' && viewport === 'mobile') {
      setAppBackground(backgroundTechnologyMobile);
    } else if (pathname === '/technologies' && viewport === 'tablet') {
      setAppBackground(backgroundTechnologyTablet);
    } else {
      setAppBackground(backgroundTechnologyDesktop);
    }
  }, [pathname]);

  return (
    <div className="App" style={{ backgroundImage: `url(${appBackground})` }}>
      <Header
        pathname={pathname}
        hidden={hiddenAside}
        setHiddenAside={setHiddenAside}
      />
      <Aside hidden={hiddenAside} setHiddenAside={setHiddenAside} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination"
          element={<Destination destinationData={data.destinations} />}
        />
        <Route path="/crew" element={<Crew crewData={data.crew} />} />
        <Route
          path="/technologies"
          element={<Technologies technologiesData={data.technology} />}
        />
      </Routes>
    </div>
  );
}

export default App;
