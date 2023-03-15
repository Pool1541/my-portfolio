import { useState } from "react";

export default function useScroll() {
  const [scroll, setScroll] = useState(0);
  const header = document.querySelector("#header");

  function onScroll() {
    const currentScroll = window.scrollY;
    if (currentScroll > scroll && header) {
      setScroll(currentScroll);
      if (!header.classList.contains("hidden")) header.classList.add("hidden");
    } else {
      setScroll(currentScroll);
      if (header && header.classList.contains("hidden"))
        header.classList.remove("hidden");
    }
  }

  window.addEventListener("scroll", onScroll, { once: true });

  return {
    scroll,
  };
}
