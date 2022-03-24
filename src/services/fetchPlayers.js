import { client } from './client.js';

export async function fetchPlayers() {
  const data = await client.from('players').select('*');
  return data.data;
}

export async function fetchPlayerById(id) {
  const data = await client
    .from('players')
    .select('*, teams (*)')
    .match({ id })
    .single();

  return data.data;
}