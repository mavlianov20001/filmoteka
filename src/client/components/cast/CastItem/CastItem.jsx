import React from "react";

import imageDef from "../../../../image/default_image.png";
import styles from "./CastItem.module.scss";

export default function CastItem({ profile_path, name }) {
  return (
    <li className={styles.CastItem}>
      <img
        className={styles.CastItem__img}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : imageDef
        }
        alt="img"
      />
      <h1 className={styles.CastItem__title}>{name}</h1>
    </li>
  );
}
CastItem.defaultProps = {
  profile_path: imageDef,
};
