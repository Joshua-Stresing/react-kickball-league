import { client } from './client.js';

export async function fetchTeams() {
  const data = await client.from('teams').select('*');
  return data.data;
}

export async function fetchTeamPlayersById(id) {
  const data = await client
    .from('teams')
    .select('*, players (*)')
    .match({ id })
    .single();

  return data.data;
}