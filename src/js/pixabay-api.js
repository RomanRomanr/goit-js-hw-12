import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const MY_KEY = '54859534-8152a3885f48c1e8938887334';

export async function getImagesByQuery(query, page = 1) {
  const response = await axios
    .get(BASE_URL, {
      params: {
        key: MY_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15,
      },
    })
  return response.data;
}
