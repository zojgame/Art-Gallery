import { useQuery } from '@tanstack/react-query';
import { getPaintings } from '../api';
import { Paints } from '../types';

function usePaintings(authorId?: number, locationId?: number, title?: string) {
  return useQuery<Paints>({
    queryKey: ['paintings', authorId, locationId, title],
    queryFn: () => getPaintings(authorId, locationId, title),
  });
}

export { usePaintings };
