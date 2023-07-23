import React from "react";
import styles from "./MovieList.module.scss";

import MovieItem from "../MovieItem";

export default function MovieList({ data }) {
  const filmElems = data.map((item) => <MovieItem key={item.id} {...item} />);
  return (
    <>
      <ul className={styles.list}>{filmElems}</ul>
    </>
  );
}
