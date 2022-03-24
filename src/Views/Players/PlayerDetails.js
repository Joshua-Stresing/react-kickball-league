import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchPlayerById } from '../../services/fetchPlayers';


export default function PlayerDetails() {
  const [players, setPlayers] = useState({ teams: [] });
  const [error, setError] = useState('');
//   const params = useParams();
  const { id } = useParams();

  console.log(id);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPlayerById(id);
        console.log(data); 
        setPlayers(data);

      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className='PlayerDetails'>
      {error && <p>{error}</p>}
     
      <div key={players.id}>
        <h1>{players.name}</h1>
        <p>Position: {players.position}</p>
        <p>Team: <Link to={`/teams/${players.teams.id}`}> {players.teams.name} </Link></p>       
      </div>
    </div>
  );
}