import React, { useEffect, useState } from 'react';
import { fetchTeams } from '../../services/fetchTeams';

export default function Teams() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTeams();
      console.log(data);
      setTeam(data);
    };
    fetchData();
  }, []);
    
  return (
    <div>teams</div>
  );
}