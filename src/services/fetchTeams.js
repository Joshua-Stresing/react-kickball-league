import { client } from './client.js';

export async function fetchTeams() {
   const data = await client.from('teams').select('*');
   return data.data;
}