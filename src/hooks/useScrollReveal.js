/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function useScrollReveal(idsArray, options) {
  const config = {
    duration: 500,
    delay: 200,
    distance: "100px",
    easing: "ease-out",
    origin: "left",
    interval: 100,
    ...options,
  };

  useEffect(() => {
    const query = idsArray.reduce((acc, curr) => {
      return [...acc, ...document.querySelectorAll(curr)];
    }, []);

    ScrollReveal().reveal(query, config);
  }, []);
}
