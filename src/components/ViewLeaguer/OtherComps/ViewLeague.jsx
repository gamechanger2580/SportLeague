import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PremierLeague from '../TeamCard/PremierLeague'; // Import PremierLeague component

function ViewLeague() {
  return (
    <Routes>
      <Route path="/premier" element={<PremierLeague />} /> {/* Default route */}
    </Routes>
  );
}

export default ViewLeague;
