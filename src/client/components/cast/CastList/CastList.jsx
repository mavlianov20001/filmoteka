import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import styles from "./CastList.module.scss";

import CastItem from "../CastItem";

export default function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const apiCast = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    axios.get(apiCast).then(async (response) => {
      const data = await response.data;
      const { cast } = data;

      setCast(cast);
    });
  }, []);

  return (
    <div className={styles.Cast}>
      {cast.length > 0 ? (
        <>
          <ul className={styles.Cast__list}>
            {cast.map((item) => (
              <CastItem key={item.id} {...item} />
            ))}
          </ul>
        </>
      ) : (
        <div>Cast list is empty</div>
      )}
    </div>
  );
}

//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
