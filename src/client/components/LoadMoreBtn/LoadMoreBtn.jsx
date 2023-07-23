import React from "react";

import styles from "./LoadMoreBtn.module.scss";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div>
      <button className={styles.LoadMoreBtn} onClick={onClick}>
        Load More
      </button>
    </div>
  );
}
