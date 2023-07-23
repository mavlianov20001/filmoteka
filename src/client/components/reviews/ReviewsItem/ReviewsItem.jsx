import React from "react";

import imageDef from "../../../../image/default_image.png";

import styles from "./ReviewItem.module.scss";

export default function ReviewsItem({
  author,
  author_details,
  content,
  created_at,
}) {
  return (
    <li className={styles.ReviewsItem}>
      <h1 className={styles.ReviewsItem__title}>{author}</h1>
      <p className={styles.ReviewsItem__text}>{content}</p>
      <p className={styles.ReviewsItem__date}>Created date:{created_at}</p>
    </li>
  );
}
ReviewsItem.defaultProps = {
  avatar_path: imageDef,
};
