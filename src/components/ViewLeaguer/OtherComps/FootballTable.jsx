// FootballLeagueApp.jsx
import React, { useState } from 'react';
import PointsTable from './PointsTable';
import MatchModal from './MatchModal';

const FootballLeagueApp = () => {
  const initialPointsTable = [
    { team: 'Real Madrid', wins: 0, losses: 0, draws: 0, goalsScored: 0, points: 0, matchesPlayed: 0 },
    { team: 'Barcelona', wins: 0, losses: 0, draws: 0, goalsScored: 0, points: 0, matchesPlayed: 0 },
    { team: 'Liverpool', wins: 0, losses: 0, draws: 0, goalsScored: 0, points: 0, matchesPlayed: 0 },
    // Add more teams accordingly
  ];

  const [pointsTable, setPointsTable] = useState(initialPointsTable);
  const [showModal, setShowModal] = useState(false);

  const updateMatchResults = (teamA, teamB, goalsTeamA, goalsTeamB) => {
    const updatedTable = pointsTable.map(team => {
      if (team.team === teamA || team.team === teamB) {
        team.matchesPlayed++;
        if (team.team === teamA) {
          team.goalsScored += goalsTeamA;
          if (goalsTeamA > goalsTeamB) {
            team.wins++;
            team.points += 3; // Update points for winning
          } else if (goalsTeamA < goalsTeamB) {
            team.losses++;
          } else {
            team.draws++;
            team.points += 1; // Update points for drawing
          }
        } else if (team.team === teamB) {
          team.goalsScored += goalsTeamB;
          if (goalsTeamB > goalsTeamA) {
            team.wins++;
            team.points += 3; // Update points for winning
          } else if (goalsTeamB < goalsTeamA) {
            team.losses++;
          } else {
            team.draws++;
            team.points += 1; // Update points for drawing
          }
        }
      }
      return team;
    });

    // Sort the updated table based on points in descending order
    updatedTable.sort((a, b) => b.points - a.points);
    
    // Update the points table
    setPointsTable(updatedTable);
    // Close the modal after updating match results
    setShowModal(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PointsTable pointsTable={pointsTable} />
      <br/>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update Match Results
      </button>
      {showModal && (
        <MatchModal
          updateMatchResults={updateMatchResults}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default FootballLeagueApp;
