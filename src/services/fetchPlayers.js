import { client } from './client.js';

export async function fetchPlayers() {
  const data = await client.from('players').select('*');
  return data.data;
}