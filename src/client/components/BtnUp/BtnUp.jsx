import React, { useEffect, useState } from "react";

import styles from "./BtnUp.module.scss";

import ScrollBtn from "../../../image/BtnUp.png";

export default function BtnUp() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      right: -1,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.wrapper}>
      {offset > 400 ? (
        <button className={styles.ScrollBtn} onClick={handlerScrollUp}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 32 32"
          >
            <title>circle-up</title>
            <path d="M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z"></path>
            <path d="M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"></path>
          </svg>
        </button>
      ) : (
        <button className={styles.scrollInvisible} onClick={handlerScrollUp}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="52"
            viewBox="0 0 32 32"
          >
            <title>circle-up</title>
            <path d="M0 16c0 8.837 7.163 16 16 16s16-7.163 16-16-7.163-16-16-16-16 7.163-16 16zM29 16c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13 13 5.82 13 13z"></path>
            <path d="M22.086 20.914l2.829-2.829-8.914-8.914-8.914 8.914 2.828 2.828 6.086-6.086z"></path>
          </svg>
        </button>
      )}
    </div>
  );
}

// export function scrollToTop() {
//   refs.rootElement.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// }

// refs.scrollToTopBtn.addEventListener("click", scrollToTop);

// export function scrollEvent() {
//   if (window.pageYOffset > 300) {
//     refs.scrollToTopBtn.classList.add("scroll-visible");
//     refs.scrollToTopBtn.classList.remove("noHover");
//     refs.scrollToTopBtn.classList.remove("clicked");
//   } else {
//     refs.scrollToTopBtn.classList.remove("scroll-visible");
//     refs.scrollToTopBtn.classList.add("noHover");
//     refs.scrollToTopBtn.classList.add("clicked");
//   }
// }

// refs.window.addEventListener("scroll", scrollEvent);
