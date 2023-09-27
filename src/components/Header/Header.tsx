import { useEffect, useState } from 'react';
import { CompanyIcon, ThemeModeIcon } from '../../ui';
import styles from './styles.module.scss';

function HeaderComponent() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const backgroundTheme = `var(--background-color-${theme})`;
    const colorTheme = `var(--font-color-${theme})`;
    const secondColorTheme = `var(--second-font-color-${theme})`;

    document.body.style.setProperty('--font-color', colorTheme);
    document.body.style.setProperty('--background-color', backgroundTheme);
    document.body.style.setProperty('--second-font-color', secondColorTheme);
  }, [theme]);

  const handleOnThemeSwitchClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const handleOnThemeKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.code === 'Enter') {
      event.preventDefault();
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }
  };

  return (
    <header className={styles.header}>
      <CompanyIcon />
      <button
        tabIndex={0}
        type="button"
        className={styles.theme_button}
        onClick={handleOnThemeSwitchClick}
        onKeyDown={handleOnThemeKeyDown}
      >
        <ThemeModeIcon />
      </button>
    </header>
  );
}

export { HeaderComponent };
