import { Divider } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../styles/Layout.module.css";

export function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.linkChild}>Home</a>
      </Link>
      <Divider orientation="vertical" />
      <Link href="/about">
        <a className={styles.linkChild}>About Us</a>
      </Link>
      <Divider orientation="vertical" />
      <Link href="/contact">
        <a className={styles.linkChild}>Contact</a>
      </Link>
    </div>
  );
}
