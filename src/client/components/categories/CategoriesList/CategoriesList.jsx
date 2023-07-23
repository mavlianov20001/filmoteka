import React, { useEffect } from "react";
import CategElems from "../CategElems";
import CategoriesItem from "../CategoriesItem";
import styles from "./CategoriesList.module.scss";

const CategoriesList = ({ getCategoryId }) => {
  const categElem = CategElems.map((item) => (
    <CategoriesItem key={item.id} {...item} getCategoryId={getCategoryId} />
  ));
  return <ul className={styles.list}>{categElem}</ul>;
};

export default CategoriesList;
