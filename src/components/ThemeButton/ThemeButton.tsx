import { useEffect, useState } from 'react';
import { ThemeModeIcon } from '../../ui';
import styles from './styles.module.scss';
import { THEME } from '../../consts';

function ThemeButtonComponent() {
  const currentTheme = localStorage.getItem('theme') ?? THEME.DARK;
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const backgroundTheme = `var(--background-color-${theme})`;
    const colorTheme = `var(--font-color-${theme})`;
    const secondColorTheme = `var(--second-font-color-${theme})`;
    const inputBackgroundColor = `var(--input-background-color-${theme})`;
    const thirdColorTheme = `var(--third-font-color-${theme})`;

    document.body.style.setProperty('--font-color', colorTheme);
    document.body.style.setProperty('--background-color', backgroundTheme);
    document.body.style.setProperty('--third-font-color', thirdColorTheme);
    document.body.style.setProperty('--second-font-color', secondColorTheme);
    document.body.style.setProperty(
      '--input-background-color',
      inputBackgroundColor,
    );
  }, [theme]);

  const handleOnThemeSwitchClick = () => {
    if (theme === THEME.LIGHT) {
      setTheme(THEME.DARK);
    } else {
      setTheme(THEME.LIGHT);
    }
  };

  const handleOnThemeKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.code === 'Enter') {
      event.preventDefault();
      const updatedTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
      setTheme(updatedTheme);
    }
  };

  return (
    <button
      tabIndex={0}
      type="button"
      className={styles.theme_button}
      onClick={handleOnThemeSwitchClick}
      onKeyDown={handleOnThemeKeyDown}
    >
      <ThemeModeIcon />
    </button>
  );
}

export { ThemeButtonComponent };
