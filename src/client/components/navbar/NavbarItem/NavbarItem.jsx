import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./NavbarItem.module.scss";

export default function NavbarItem({ to, title }) {
  return (
    <li className={styles.NavbarItem}>
      <NavLink to={to} className={styles.navItem}>
        {title}
      </NavLink>
    </li>
  );
}
