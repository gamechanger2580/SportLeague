import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MainComp() {
  const [showLeagueDetails, setShowLeagueDetails] = useState(false);

  const handleViewLeagueClick = () => {
    setShowLeagueDetails(true);
  };

  return (
    <div>
      {/* Add content for the "About Us" section */}
      <button onClick={handleViewLeagueClick}>View Leagues</button>
      {showLeagueDetails && (
        <>
          <Link to="/about-us/view-league">Premier League</Link>
          {/* Add links for other leagues */}
        </>
      )}
    </div>
  );
}

export default MainComp;
