import { useContext } from 'react';
import { convertAuthorsToOptions } from '../../consts';
import { useAuthors } from '../../hooks';
import { Option } from '../../types';
import { SelectComponent } from '../Select';

import styles from './styles.module.scss';
import { Context } from '../../store';

function FiltersComponent() {
  const { isLoading, data } = useAuthors();
  const { setAuthor } = useContext(Context)!;
  const convertedData = convertAuthorsToOptions(data);

  const onAuthorSelect = (author: Option) => {
    setAuthor(author.id);
  };

  return (
    <div className={styles.filters_container}>
      {!isLoading && (
        <SelectComponent
          options={convertedData}
          onItemSelect={onAuthorSelect}
        />
      )}
    </div>
  );
}

export { FiltersComponent };
