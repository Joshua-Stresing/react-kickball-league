import { fetchTeams } from "../../services/fetchTeams";
import React, { useEffect, useState} from "react";

export default function LandingPage() {
    const [team, setTeam] = useState(null);

    useEffect(() => {
        const fetchTeams = async () => {
            const data = await fetchTeams();
            setTeam(data);
        }
        fetchTeams();
    }, []);
    
    return (
        <div>teams</div>
        );
    }