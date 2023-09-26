import { useContext } from 'react';
import { convertAuthorsToOptions } from '../../consts';
import { useAuthors, useLocations } from '../../hooks';
import { SelectComponent } from '../Select';

import styles from './styles.module.scss';
import { Context } from '../../store';
import { convertLocationsToOptions } from '../../consts/converting';

function FiltersComponent() {
  const { isLoading: isAuthorsLoading, data: authors } = useAuthors();
  const { isLoading: isLocationsLoading, data: locations } = useLocations();
  const { setAuthorId, setLocationId } = useContext(Context)!;
  const authorsToOptions = convertAuthorsToOptions(authors);
  const locationsToOptions = convertLocationsToOptions(locations);

  const onAuthorSelect = (authorId: number | undefined) => {
    setAuthorId(authorId);
  };

  const onLocationSelect = (locationId: number | undefined) => {
    setLocationId(locationId);
  };

  return (
    <div className={styles.filters_container}>
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
