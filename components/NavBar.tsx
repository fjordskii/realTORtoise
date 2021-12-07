/** @jsxImportSource theme-ui */
import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a
          className={styles.linkChild}
          sx={() => ({
            color: 'text',
          })}
        >
          SMS
        </a>
      </Link>
      |
      <Link href="/recipients">
        <a
          className={styles.linkChild}
          sx={() => ({
            color: 'text',
          })}
        >
          Recipients
        </a>
      </Link>
      |
      <Link href="/groups">
        <a
          className={styles.linkChild}
          sx={() => ({
            color: 'text',
          })}
        >
          Groups
        </a>
      </Link>
    </div>
  );
}
