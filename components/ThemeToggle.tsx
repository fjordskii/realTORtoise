/** @jsxImportSource theme-ui */
import { FunctionComponent } from 'react';
import { useColorMode } from 'theme-ui';
import styles from '../styles/ThemeToggle.module.css';

const ThemeToggle: FunctionComponent = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className={styles.themeToggle}>
      <button
        onClick={(e) => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
        }}
        className="btn btn-default"
        sx={() => ({
          color: 'text',
          bg: 'background',
        })}
      >
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </button>
    </div>
  );
};

export { ThemeToggle };
