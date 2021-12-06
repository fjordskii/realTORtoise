import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.linkChild}>SMS</a>
      </Link>
      |
      <Link href="/recipients">
        <a className={styles.linkChild}>Recipients</a>
      </Link>
      |
      <Link href="/groups">
        <a className={styles.linkChild}>Groups</a>
      </Link>
    </div>
  );
}
