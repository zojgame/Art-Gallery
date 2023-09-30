import { Paint } from '../../types';
import styles from './styles.module.scss';
import { API_URL } from '../../consts';

interface PaintComponentProps {
  paint: Paint;
  author: string;
  location: string;
}

export function PaintComponent({
  paint,
  author,
  location,
}: PaintComponentProps) {
  const imageUrl = `${API_URL}${paint.imageUrl}`;

  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageUrl} alt={paint.name} />
      <div className={styles.info_container}>
        <div className={styles.info}>
          <div className={styles.name}>{paint.name}</div>
          <div className={styles.author}>
            <div className={styles.label}>Author:</div>
            <div>{author}</div>
          </div>
          <div className={styles.created}>
            <div className={styles.label}>Created:</div>
            <div>{paint.created}</div>
          </div>
          <div className={styles.location}>
            <div className={styles.label}>Location:</div>
            <div>{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
