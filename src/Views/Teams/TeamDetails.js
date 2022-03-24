import React, { useEffect, useState } from 'react';
import { fetchTeams } from '../../services/fetchTeams';

export default function TeamDetails() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTeams();
        setTeams(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className='TeamDetails'>
      {error && <p>{error}</p>}
      { teams.map((team) => (
        <div key={team.id}>
          <h1>{team.name}</h1>
          <p>{team.position}</p>
          <p>{team.team_id}</p>
        </div>
      ))}
    </div>
  );
}
