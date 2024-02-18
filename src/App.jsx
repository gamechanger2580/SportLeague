import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';
import MainComp from './components/ViewLeaguer/OtherComps/MainComp';

// Import pages
import Dashboard from './pages/Dashboard';
import ViewLeague from './components/ViewLeaguer/OtherComps/ViewLeague';
import PremierLeague from './components/ViewLeaguer/TeamCard/PremierLeague';
import LaLiga from './components/ViewLeaguer/TeamCard/LaLiga';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/about-us/*" element={<MainComp />} />  // Changed here
        <Route path="/view" element={<ViewLeague />} />
        <Route path="/premier-league" element={<PremierLeague />} />
        <Route path="/la-liga" element={<LaLiga />} />
      </Routes>
    </>
  );
}

export default App;
