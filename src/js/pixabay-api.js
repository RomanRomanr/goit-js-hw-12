import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '54859534-8152a3885f48c1e8938887334';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: MY_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.error('Error:', error);
      return { hits: [] };
    });
}
