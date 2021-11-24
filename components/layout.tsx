import styles from "../styles/Layout.module.css";
import { NavBar } from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
