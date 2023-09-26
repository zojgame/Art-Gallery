import axios from 'axios';
import { URL_GET_PAINTINGS } from '../consts';

export const getPaintings = async (authorId?: number, locationId?: number) => {
  const authorIdParam = authorId ? `authorId=${authorId}` : '';
  const locationIdParam = locationId ? `locationId=${locationId}` : '';
  const responseUrl = `${URL_GET_PAINTINGS}?${authorIdParam}&${locationIdParam}`;
  const response = await axios.get(responseUrl);

  return response.data;
};
