import { useQuery } from '@tanstack/react-query';
import { getPaintings } from '../api';
import { Paints } from '../types';

function usePaintings(
  authorId?: number,
  locationId?: number,
  title?: string,
  createdFrom?: number,
  createdTo?: number,
  page?: number,
) {
  return useQuery<Paints>({
    queryKey: [
      'paintings',
      authorId,
      locationId,
      title,
      createdFrom,
      createdTo,
      page,
    ],
    queryFn: () =>
      getPaintings(authorId, locationId, title, createdFrom, createdTo, page),
  });
}

export { usePaintings };
