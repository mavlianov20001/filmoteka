import React from "react";
import { useParams, Route, Routes, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import imageDef from "../../../image/default_image.png";

import Cast from "../../components/cast";
import Reviews from "../../components/reviews";

import styles from "./SingleMoviePage.module.scss";

import axios from "axios";
import shortid from "shortid";

export default function SingleMoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [videos, setvideos] = useState([]);
  const [load, setLoad] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  const handleGoBack = () => navigate(-1, { replace: true });

  useEffect(() => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&`;

    const fetchFilms = async () => {
      try {
        await axios.get(apiUrl).then(async (response) => {
          const data = await response.data;
          setMovie(data);
        });
      } catch (error) {
        console.log("Error from singlePage http request" + error);
      }
    };
    fetchFilms();
  }, []);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        let videoAPI = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
        await axios.get(videoAPI).then((res) => {
          setvideos(res.data.results);
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideo();
  }, []);

  //Map Genres
  const genres = movie.genres?.map((item) => (
    <div className={` ${styles.SinglePage__text}`} key={shortid.generate()}>
      {item.name}
    </div>
  ));
  const {
    poster_path,
    backdrop_path,
    title,
    vote_count,
    overview,
    vote_average,
    popularity,
    release_date,
  } = movie;

  const filmTrailer = videos.map((video) => video.key);
  return (
    <div className={styles.SinglePage}>
      <button className={styles.SinglePage__btn} onClick={handleGoBack}>
        Go Back
      </button>
      {movie && (
        <>
          <div className={`${styles.SinglePage__inner} ${styles.container}`}>
            <div className={styles.SinglePage__dmdb}>
              <img
                className={styles.SinglePage__img}
                src={
                  poster_path &&
                  `https://image.tmdb.org/t/p/w500${
                    poster_path || backdrop_path || imageDef
                  }`
                }
                alt="img"
              />
              <button
                onClick={() => setLoad(true)}
                className={styles.SinglePage__trailer}
              >
                TRAILER
              </button>
            </div>

            <div className={styles.SinglePage__wrapper}>
              <h1 className={styles.SinglePage__list_title}>{title}</h1>
              <ul className={styles.SinglePage__list}>
                <li className={styles.SinglePage__list_item}>
                  <p className={styles.SinglePage__list_subtitle}>Vote/votes</p>
                  <p className={styles.SinglePage__text}>
                    <span className={styles.SinglePage__text2}>
                      {vote_average}
                    </span>
                    / {vote_count}
                  </p>
                </li>
                <li className={styles.SinglePage__list_item}>
                  <p className={styles.SinglePage__list_subtitle}>Popularity</p>
                  <p className={styles.SinglePage__text}>{popularity}</p>
                </li>
                <li className={styles.SinglePage__list_item}>
                  <p className={styles.SinglePage__list_subtitle}>
                    Release date
                  </p>
                  <p className={styles.SinglePage__text}>{release_date}</p>
                </li>
                <li className={styles.SinglePage__list_item}>
                  <p className={styles.SinglePage__list_subtitle}>Genres</p>

                  <div className={styles.SinglePage__box}>{genres}</div>
                </li>
              </ul>
              <h2 className={styles.SinglePage__list_about}>About</h2>
              <p className={styles.SinglePage__list_text}>{overview}</p>

              <div>
                <Link className={styles.SinglePage__list_link} to="cast">
                  Cast
                </Link>
                <Link className={styles.SinglePage__list_link} to="reviews">
                  Reviews
                </Link>
              </div>
            </div>

            <div
              onClick={() => setLoad(false)}
              className={load ? "backdrop" : "hidden"}
            >
              <iframe
                className={styles.SinglePage__frame}
                width="760"
                height="415"
                title={movie.title}
                src={`https://www.youtube.com/embed/${
                  filmTrailer[filmTrailer.length - 1]
                }`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </>
      )}

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}
