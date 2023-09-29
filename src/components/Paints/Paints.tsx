import { useContext } from 'react';

import { PaintComponent } from '../Paint';
import styles from './styles.module.scss';
import { useAuthors, useLocations, usePage, usePaintings } from '../../hooks';
import { Context } from '../../store';

export function PaintsComponent() {
  const { authorId, locationId, title, createdFrom, createdTo } =
    useContext(Context)!;
  const page = usePage();

  const { data: paints, isLoading } = usePaintings(
    authorId,
    locationId,
    title,
    createdFrom,
    createdTo,
    page,
  );
  const { data: authors } = useAuthors();
  const { data: locations } = useLocations();

  return (
    <div className={styles.cards_container}>
      {isLoading && <>Loading...</>}
      {paints &&
        !isLoading &&
        paints.map((paint) => {
          const authorName =
            authors?.find((author) => author.id === paint.authorId)?.name ??
            paint.authorId;

          const locationName =
            locations?.find((location) => location.id === paint.locationId)
              ?.location ?? paint.locationId;

          return (
            <PaintComponent
              paint={paint}
              key={`${paint.id}`}
              author={`${authorName}`}
              location={`${locationName}`}
            />
          );
        })}
    </div>
  );
}
