import React, { useEffect, useState } from 'react';
import { fetchTeamPlayersById } from '../../services/fetchTeams';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function TeamDetails() {
  const [teams, setTeams] = useState({ players: [] });
  const [error, setError] = useState('');
  const { id } = useParams();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTeamPlayersById(id);
        // console.log(data);
        setTeams(data);

      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [id]);
  
  return (
    <div className='TeamDetails'>
      {error && <p>{error}</p>}

      <h1>{teams.name}</h1>
      <p>City: {teams.city}</p>
      <p>State: {teams.state}</p>
      {teams.players.map((player) =>(
        <p key={player.id}>{player.position}: <Link to={`/players/${player.id}`}>{player.name}</Link></p>
      ))}

    </div>
  );
}
