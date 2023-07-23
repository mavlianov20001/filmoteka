import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import styles from "./MoviePage.module.scss";

import BtnUp from "../../components/BtnUp";
import Searchbar from "../../components/Searchbar";
import MovieList from "../../components/movies";
import LoadMoreBtn from "../../components/LoadMoreBtn";

export default function MoviePage() {
  const [query, setQuery] = useState("");
  const [films, setFilms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${currentPage}&include_adult=false&query=${query}`;

    const fetchFilms = async () => {
      try {
        await axios.get(apiUrl).then((response) => {
          const data = response.data;
          setFilms(() => [...films, ...data.results]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchFilms();
  }, [query, currentPage]);

  const handleChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = (query) => {
    setQuery(query);
  };

  const showMoreFilms = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  return (
    <>
      <div className={`${styles.MoviePage} `}>
        <Searchbar
          onChange={handleChange}
          onSubmit={handleSubmit}
          data={query}
        />
        <div className={styles.MoviePage__wrapper}>
          <MovieList data={films} />
          {films.length > 0 && <LoadMoreBtn onClick={showMoreFilms} />}
        </div>
      </div>
      {films.length > 0 && <BtnUp />}
    </>
  );
}
