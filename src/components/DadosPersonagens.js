import axios from 'axios';

export async function getCharacters() {
  try {
    const response = await axios.get('https://swapi.dev/api/people/');
    return response.data.results; 
  } catch (error) {
    console.error('Erro ao encontrar o personagem', error);
    return []; 
  }
}