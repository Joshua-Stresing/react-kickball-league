import React, { useEffect, useState } from 'react';
import { fetchPlayers } from '../../services/fetchPlayers';

export default function PlayerDetails() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlayers();
        setPlayers(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className='PlayerDetails'>
      {error && <p>{error}</p>}
      { players.map((player) => (
        <div key={player.id}>
          <h1>{player.name}</h1>
          <p>{player.position}</p>
          <p>{player.team_id}</p>
        </div>
      ))}
    </div>
  );
}

