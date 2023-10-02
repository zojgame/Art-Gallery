import { Authors, Locations, Options } from '../types';

export const convertAuthorsToOptions = (
  authors: Authors | undefined,
): Options => {
  if (!authors) {
    return [];
  }

  const options = authors.map((author) => ({
    id: author.id,
    value: author.name,
  }));

  return options;
};

export const convertLocationsToOptions = (
  locations: Locations | undefined,
): Options => {
  if (!locations) {
    return [];
  }

  const options = locations.map((location) => ({
    id: location.id,
    value: location.location,
  }));

  return options;
};
