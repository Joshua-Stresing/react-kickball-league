import React, { useEffect, useState } from 'react';
import { fetchPlayers } from '../../services/fetchPlayers';

export default function Players() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlayers();
      console.log(data);
      setTeam(data);
    };
    fetchData();
  }, []);
    
  return (
    <div>teams</div>
  );
}