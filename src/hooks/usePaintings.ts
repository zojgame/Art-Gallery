import { useQuery } from '@tanstack/react-query';
import { getPaintings } from '../api';
import { Paints } from '../types';

function usePaintings(authorId?: number) {
  return useQuery<Paints>({
    queryKey: ['paintings', authorId],
    queryFn: () => getPaintings(authorId),
  });
}

export { usePaintings };
