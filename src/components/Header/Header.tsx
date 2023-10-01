import { CompanyIcon } from '../../ui';
import { ThemeButtonComponent } from '../../components';
import styles from './styles.module.scss';

function HeaderComponent() {
  return (
    <header className={styles.header}>
      <CompanyIcon />
      <ThemeButtonComponent />
    </header>
  );
}

export { HeaderComponent };
