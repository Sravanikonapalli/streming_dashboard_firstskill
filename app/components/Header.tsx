"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { SiThemoviedatabase } from "react-icons/si";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}><SiThemoviedatabase size={80}/></div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/">Movies</Link>
        <Link href="/">Series</Link>
      </nav>
    </header>
  );
}
