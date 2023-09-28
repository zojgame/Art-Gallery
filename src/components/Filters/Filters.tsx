import styles from './styles.module.scss';
import { useCallback, useContext, useMemo } from 'react';
import {
  convertAuthorsToOptions,
  convertLocationsToOptions,
} from '../../consts';
import { useAuthors, useLocations } from '../../hooks';
import { Context } from '../../store';
import { InputComponent, SelectComponent } from '../../components';
import { InputRangeComponent } from '../InputRange';

function FiltersComponent() {
  const { isLoading: isAuthorsLoading, data: authors } = useAuthors();
  const { isLoading: isLocationsLoading, data: locations } = useLocations();
  const {
    setAuthorId,
    setLocationId,
    setTitle,
    setCreatedTo,
    setCreatedFrom,
    createdFrom,
    createdTo,
  } = useContext(Context)!;

  const locationsToOptions = useMemo(
    () => convertLocationsToOptions(locations),
    [locations],
  );

  const authorsToOptions = useMemo(
    () => convertAuthorsToOptions(authors),
    [authors],
  );

  const authorIdFilterChange = useCallback(
    (authorId: number | undefined) => {
      setAuthorId(authorId);
    },
    [setAuthorId],
  );

  const locationIdFilterChange = useCallback(
    (locationId: number | undefined) => {
      setLocationId(locationId);
    },
    [setLocationId],
  );

  const titleSelectFilterChange = useCallback(
    (title: string | undefined) => {
      setTitle(title);
    },
    [setTitle],
  );

  const yearsFiltersChange = useCallback(
    (firstYear?: number, secondYear?: number) => {
      setCreatedFrom(firstYear);
      setCreatedTo(secondYear);
    },
    [setCreatedFrom, setCreatedTo],
  );

  return (
    <div className={styles.filters_container}>
      <InputComponent onInputSubmit={titleSelectFilterChange} label="Name" />
      {!isAuthorsLoading && (
        <SelectComponent
          label="Authors"
          options={authorsToOptions}
          onItemSelect={authorIdFilterChange}
        />
      )}
      {!isLocationsLoading && (
        <SelectComponent
          label="Locations"
          options={locationsToOptions}
          onItemSelect={locationIdFilterChange}
        />
      )}

      <InputRangeComponent
        onFormSubmit={yearsFiltersChange}
        label={'Created'}
        firstRangeValue={createdFrom}
        secondRangeValue={createdTo}
      />
    </div>
  );
}

export { FiltersComponent };
