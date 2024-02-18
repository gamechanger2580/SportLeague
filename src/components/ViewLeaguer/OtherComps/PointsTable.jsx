import React from 'react';

const PointsTable = ({ pointsTable }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Points Table</h2>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">Team</th>
            <th className="border border-gray-400 px-4 py-2">Wins</th>
            <th className="border border-gray-400 px-4 py-2">Losses</th>
            <th className="border border-gray-400 px-4 py-2">Draws</th>
            <th className="border border-gray-400 px-4 py-2">Goals Scored</th>
            <th className="border border-gray-400 px-4 py-2">Points</th>
            <th className="border border-gray-400 px-4 py-2">Matches Played</th>
          </tr>
        </thead>
        <tbody>
          {pointsTable.map(team => (
            <tr key={team.team}>
              <td className="border border-gray-400 px-4 py-2">{team.team}</td>
              <td className="border border-gray-400 px-4 py-2">{team.wins}</td>
              <td className="border border-gray-400 px-4 py-2">{team.losses}</td>
              <td className="border border-gray-400 px-4 py-2">{team.draws}</td>
              <td className="border border-gray-400 px-4 py-2">{team.goalsScored}</td>
              <td className="border border-gray-400 px-4 py-2">{team.points}</td>
              <td className="border border-gray-400 px-4 py-2">{team.matchesPlayed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PointsTable;
