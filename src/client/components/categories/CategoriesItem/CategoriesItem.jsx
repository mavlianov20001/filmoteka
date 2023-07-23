import React from "react";
import styles from "./CategoriesItem.module.scss";
const CategoriesItem = ({ name, getCategoryId, id }) => {
  // const handleClick = (e) => {
  //   if (e.target.id === e.currentTarget.id) {
  //     getCategoryId(e.target.id);
  //     console.log(e.target.id);
  //   }
  // };

  return (
    <li>
      <button
        id={id}
        onClick={(e) => {
          getCategoryId(e.target.id);
        }}
        className={styles.btn}
      >
        {name}
      </button>
    </li>
  );
};

export default CategoriesItem;
