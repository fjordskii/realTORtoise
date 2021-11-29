import styles from '../styles/Layout.module.css';
import { NavBar } from './NavBar';

interface ILayout {
  children: any;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
