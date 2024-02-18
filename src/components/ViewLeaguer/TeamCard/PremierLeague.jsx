import React from 'react';
import FootballTable from '../OtherComps/FootballTable';

function PremierLeague() {
  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-3xl">
        <div className="max-w-md bg-white rounded-lg shadow-lg overflow-hidden my-4 league-card">
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">Premier League</h2>
            {/* Add Premier League details */}
          </div>
        </div>
      </div>
      <FootballTable />
    </div>
  );
}

export default PremierLeague;
