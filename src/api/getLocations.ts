import axios from 'axios';
import { URL_GET_LOCATIONS } from '../consts';

export const getLocations = async () => {
  const response = await axios.get(URL_GET_LOCATIONS);

  return response.data;
};
