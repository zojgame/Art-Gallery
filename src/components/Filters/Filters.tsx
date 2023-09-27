import { useCallback, useContext, useMemo } from 'react';
import { convertAuthorsToOptions } from '../../consts';
import { useAuthors, useLocations } from '../../hooks';
import { SelectComponent } from '../Select';

import styles from './styles.module.scss';
import { Context } from '../../store';
import { convertLocationsToOptions } from '../../consts/converting';
import { InputComponent } from '..';

function FiltersComponent() {
  const { isLoading: isAuthorsLoading, data: authors } = useAuthors();
  const { isLoading: isLocationsLoading, data: locations } = useLocations();
  const { setAuthorId, setLocationId, setTitle } = useContext(Context)!;
  const locationsToOptions = useMemo(
    () => convertLocationsToOptions(locations),
    [locations],
  );
  const authorsToOptions = useMemo(
    () => convertAuthorsToOptions(authors),
    [authors],
  );

  const onAuthorSelect = useCallback(
    (authorId: number | undefined) => {
      setAuthorId(authorId);
    },
    [setAuthorId],
  );

  const onLocationSelect = useCallback(
    (locationId: number | undefined) => {
      setLocationId(locationId);
    },
    [setLocationId],
  );

  const onTitleSelect = useCallback(
    (title: string | undefined) => {
      setTitle(title);
    },
    [setTitle],
  );

  return (
    <div className={styles.filters_container}>
      <InputComponent onInputSubmit={onTitleSelect} label="Name" />
      {!isAuthorsLoading && (
        <SelectComponent
          label="Authors"
          options={authorsToOptions}
          onItemSelect={onAuthorSelect}
        />
      )}
      {!isLocationsLoading && (
        <SelectComponent
          label="Locations"
          options={locationsToOptions}
          onItemSelect={onLocationSelect}
        />
      )}
    </div>
  );
}

export { FiltersComponent };
