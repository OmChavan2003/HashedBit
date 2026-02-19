import React, { useState, useEffect } from 'react';
import './App.css'; // We will add styling next

function App() {
  // 1. Set up state to hold our fetched data
  const [teams, setTeams] = useState([]);

  // 2. Use useEffect to fetch data when the component loads
  useEffect(() => {
    // Fetch data from the provided API endpoint
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then((response) => response.json()) // Convert the response to JSON format
      .then((data) => {
        
        // 3. Sort the data by NRR in ascending order (Lowest to Highest)
        // We use parseFloat to ensure the NRR strings are treated as numbers
        const sortedData = data.sort((a, b) => parseFloat(a.NRR) - parseFloat(b.NRR));
        
        // 4. Save the sorted data into our state
        setTeams(sortedData);
      })
      .catch((error) => {
        console.error("Error fetching the IPL data: ", error);
      });
  }, []); // The empty array [] means this effect runs exactly once when the page loads

  return (
    <div className="App">
      <h1 className="title">IPL Season 2022 Points Table</h1>
      
      {/* 5. Create the Table Structure */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>NRR</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {/* 6. Map through our sorted state to generate a row for each team */}
            {teams.map((team, index) => (
              <tr key={team.No}>
                <td>{team.No}</td>
                <td className="team-name">{team.Team}</td>
                <td>{team.Matches}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{team.Tied}</td>
                {/* Highlighting the NRR column since it's the sorting criteria */}
                <td className="nrr-highlight">{team.NRR}</td>
                <td className="points-highlight">{team.Points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;