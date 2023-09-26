import { useQuery } from '@tanstack/react-query';
import { getPaintings } from '../api';
import { Paints } from '../types';

function usePaintings(authorId?: number, locationId?: number) {
  return useQuery<Paints>({
    queryKey: ['paintings', authorId, locationId],
    queryFn: () => getPaintings(authorId, locationId),
  });
}

export { usePaintings };
