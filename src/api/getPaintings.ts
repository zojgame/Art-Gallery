import axios from 'axios';
import { URL_GET_PAINTINGS, PAGE_LIMIT } from '../consts';

export const getPaintings = async (
  authorId?: number,
  locationId?: number,
  title?: string,
  createdFrom?: number,
  createdTo?: number,
  page?: number,
) => {
  const createdFromParam = createdFrom ? `created_gte=${createdFrom}` : '';
  const createdToParam = createdTo ? `created_lte=${createdTo}` : '';
  const titleParam = title ? `q=${title}` : '';
  const authorIdParam = authorId ? `authorId=${authorId}` : '';
  const locationIdParam = locationId ? `locationId=${locationId}` : '';
  const pageParam = page ? `_page=${page}` : '';
  const pageLimitParam = `_limit=${PAGE_LIMIT}`;

  const responseUrl = `${URL_GET_PAINTINGS}?${titleParam}&${authorIdParam}&${locationIdParam}&${createdFromParam}&${createdToParam}&${pageParam}&${pageLimitParam}`;
  const response = await axios.get(responseUrl);

  return response.data;
};
