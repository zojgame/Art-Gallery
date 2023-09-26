import axios from 'axios';
import { URL_GET_AUTHORS } from '../consts';

export const getAuthors = async () => {
  const response = await axios.get(URL_GET_AUTHORS);

  return response.data;
};
