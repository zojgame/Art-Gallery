import { Authors, Options } from '../types';

export const convertAuthorsToOptions = (
  authors: Authors | undefined,
): Options => {
  if (authors === undefined) {
    return [];
  }

  const options = authors.map((author) => ({
    id: author.id,
    value: author.name,
  }));

  return options;
};
