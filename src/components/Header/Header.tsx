import { CompanyIcon } from '../../ui';
import { ThemeButtonComponent } from '../ThemeButton';
import styles from './styles.module.scss';

export function HeaderComponent() {
  return (
    <header className={styles.header}>
      <CompanyIcon />
      <ThemeButtonComponent />
    </header>
  );
}
