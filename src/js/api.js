import axios from 'axios';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api';

export async function createNewComment(obj) {
  const response = await axios.post('/requests', obj);
  return response.data;
}

export async function getComment() {
  return await axios.get('/reviews');
}
