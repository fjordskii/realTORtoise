/** @jsxImportSource theme-ui */

import styles from '../styles/Layout.module.css';
import { NavBar } from './NavBar';

interface ILayout {
  children: any;
}

export default function Layout({ children }: ILayout) {
  return (
    <div
      className={styles.container}
      sx={(theme) => ({
        bg: 'background',
      })}
    >
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
