import { useQuery } from '@tanstack/react-query';
import { getLocations } from '../api';
import { Locations } from '../types';

function useLocations() {
  return useQuery<Locations>({
    queryKey: ['locations'],
    queryFn: getLocations,
  });
}

export { useLocations };
