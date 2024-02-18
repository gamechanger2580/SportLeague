// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ViewLeague from './ViewLeague'
import PremierLeague from '../TeamCard/PremierLeague';
import LaLiga from '../TeamCard/LaLiga'

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<ViewLeague />} />
      <Route path="/premier-league" element={<PremierLeague />} />
      <Route path="/la-liga" element={<LaLiga />} />
      {/* Add routes for other leagues */}
    </Routes>
  );
}

export default RoutesComponent;
