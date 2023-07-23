import React from "react";
import { Link } from "react-router-dom";

import imageDef from "../../../../image/default_image.png";

import styles from "./MovieItem.module.scss";

export default function MovieItem({
  poster_path,
  backdrop_path,
  title,
  vote_average,
  id,
  name,
  vote_count,
}) {
  return (
    <li className={styles.container}>
      <Link className={styles.box} to={`/movies/${id}`}>
        <b></b>
        <img
          className={styles.MovieItem__img}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`
              : imageDef
          }
          alt="img"
        />
        <div className={styles.content}>
          <h1 className={styles.MovieItem__title}>{title || name}</h1>
          <p className={styles.MovieItem__rating}>
            Vote/Votes: {Math.round(vote_average)}/ <span>{vote_count}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
