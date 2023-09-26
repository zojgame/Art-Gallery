import { useQuery } from '@tanstack/react-query';
import { getAuthors } from '../api';
import { Authors } from '../types';

function useAuthors() {
  return useQuery<Authors>({
    queryKey: ['authors'],
    queryFn: getAuthors,
  });
}

export { useAuthors };
