import { client } from './client.js';

export async function fetchTeams() {
  const data = await client.from('teams').select('*');
  return data.data;
}

export async function fetchTeamsById(id) {
  const data = await client
    .from('teams')
    .select('*')
    .match({ team_id: id })
    .single();
  return data.data;
}