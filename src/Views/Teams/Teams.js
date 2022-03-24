import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTeams } from '../../services/fetchTeams';

export default function Teams() {
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
    <div className='Teams'>
      <h1>Teams</h1>
      {error && <p>{error}</p>}
      { teams.map((team) => (
        <div key={team.id}>
          <Link to = {`/teams/${team.id}`}>
            <h3>{team.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}