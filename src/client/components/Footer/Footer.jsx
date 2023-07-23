import React from "react";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      @ {new Date().getFullYear()} Copyright Text
      <a href="https://github.com/Rolandsonn">Repo</a>
    </footer>
  );
}
