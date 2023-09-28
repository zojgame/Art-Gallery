import {
  HeaderComponent,
  PaintsComponent,
  FiltersComponent,
  PaginationComponent,
} from '../../components';
import styles from './styles.module.scss';

function MainPage() {
  return (
    <div className={styles.main_page}>
      <HeaderComponent />
      <FiltersComponent />
      <PaintsComponent />
      <PaginationComponent />
    </div>
  );
}

export { MainPage };
