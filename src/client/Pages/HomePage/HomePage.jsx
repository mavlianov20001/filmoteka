import React, { useState } from "react";
import styles from "./HomePage.module.scss";

import axios from "axios";

import BtnUp from "../../components/BtnUp";
import MovieList from "../../components/movies";
import LoadMoreBtn from "../../components/LoadMoreBtn";
import CategoriesList from "../../components/categories/CategoriesList";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [categ, setCateg] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const API_KEY = process.env.REACT_APP_API_KEY;

  //? get trending films
  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${currentPage}`;
    const fetchFilms = async () => {
      try {
        await axios.get(apiUrl).then((response) => {
          const data = response.data;
          setFilms(() => {
            return [...films, ...data.results];
          });
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchFilms();
  }, [currentPage]);

  //todo get categories

  useEffect(() => {
    const getByCategory = async () => {
      try {
        await axios
          .get(
            `https://api.themoviedb.org/4/list/${categ}?page=${currentPage}&api_key=${API_KEY}`
          )
          .then((res) => {
            setFilms(res.data.results);
          });
      } catch (error) {
        console.error("Smth wrong with api get full trends" + error);
      }
    };
    if (categ) {
      getByCategory();
    }
  }, [categ]);

  const showMoreFilms = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  const getCategoryId = (id) => {
    setCateg(id);
  };

  return (
    <div className={styles.MoviePage}>
      <div className={styles.rap}>
        <CategoriesList getCategoryId={getCategoryId} />
        <MovieList data={films} />
        <LoadMoreBtn onClick={showMoreFilms} />
      </div>
      {films.length > 0 && <BtnUp />}
    </div>
  );
}
