import { useContext } from 'react';

import { PaintComponent } from '../Paint';
import styles from './styles.module.scss';
import { usePaintings } from '../../hooks';
import { Context } from '../../store';

export function PaintsComponent() {
  const { authorId, locationId } = useContext(Context)!;
  const { data: paints, isLoading } = usePaintings(authorId, locationId);

  return (
    <div className={styles.cards_container}>
      {isLoading && <>Loading...</>}
      {paints &&
        !isLoading &&
        paints.map((paint) => (
          <PaintComponent paint={paint} key={`${paint.id}`} />
        ))}
    </div>
  );
}
