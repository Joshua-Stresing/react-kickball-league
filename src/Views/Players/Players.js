import React, { useEffect, useState } from 'react';
import { fetchPlayers } from '../../services/fetchPlayers';

export default function Players() {
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
    <div className='Players'>
      <h1>Players</h1>
      {error && <p>{error}</p>}
      { players.map((player) => (
        <div key={player.id}>
          <p>{player.name}</p>
        </div>
      )) }
    </div>
  );
}