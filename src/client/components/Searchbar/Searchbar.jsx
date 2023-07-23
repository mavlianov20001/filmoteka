import React from "react";
import { useState } from "react";

import styles from "./Searchbar.module.scss";

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState("");
  const handleChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
    <div className={styles.SearchBar}>
      <form className={styles.SearchBar__searchForm} onSubmit={handleSubmit}>
        <button
          type="submit"
          onClick={() => onSubmit(query)}
          className={styles.SearchBar__searchFormBtn}
        >
          <span className={styles.SearchBar__searchFormButtonLabel}>
            Search
          </span>
        </button>
        <input
          className={styles.SearchBar__searchFormInput}
          type="text"
          onChange={handleChange}
          value={query}
          placeholder="Search movies"
        />
      </form>
    </div>
  );
}
