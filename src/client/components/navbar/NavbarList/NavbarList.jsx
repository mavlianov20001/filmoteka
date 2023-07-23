import React from "react";

import NavbarItem from "../NavbarItem";
import NavElems from "../NavElems";

import styles from "./NavbarList.module.scss";

export default function NavbarList() {
  const elemsMarkUp = NavElems.map((item) => (
    <NavbarItem key={item.title} {...item} />
  ));
  return <ul className={styles.navList}>{elemsMarkUp}</ul>;
}
