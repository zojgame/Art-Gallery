import axios from 'axios';
import { URL_GET_PAINTINGS } from '../consts';

export const getPaintings = async (authorId?: number) => {
  const authorIdParam = authorId ? `?authorId=${authorId}` : '';
  const responseUrl = `${URL_GET_PAINTINGS}${authorIdParam}`;
  const response = await axios.get(responseUrl);

  return response.data;
};
