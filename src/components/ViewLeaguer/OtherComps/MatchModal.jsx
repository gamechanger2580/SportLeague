// MatchModal.js
import React, { useState } from 'react';

const MatchModal = ({ updateMatchResults, onClose }) => {
  // State for form fields
  const [teamA, setTeamA] = useState('');
  const [teamB, setTeamB] = useState('');
  const [goalsTeamA, setGoalsTeamA] = useState('');
  const [goalsTeamB, setGoalsTeamB] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the updateMatchResults function with the entered match details
    updateMatchResults(teamA, teamB, parseInt(goalsTeamA), parseInt(goalsTeamB));
    // Close the modal
    onClose();
  };

  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-content bg-white p-6 rounded-lg">
        <span className="close absolute top-0 right-0 cursor-pointer" onClick={onClose}>&times;</span>
        <h2 className="text-lg font-bold mb-4">Update Match Results</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Team A:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              value={teamA}
              onChange={(e) => setTeamA(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Team B:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              value={teamB}
              onChange={(e) => setTeamB(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Goals scored by Team A:</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              value={goalsTeamA}
              onChange={(e) => setGoalsTeamA(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Goals scored by Team B:</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-md py-2 px-3"
              value={goalsTeamB}
              onChange={(e) => setGoalsTeamB(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default MatchModal;
