import { lazy, useState } from "react";
import { Suspense } from "react";

import Loader from "./assets/icons/Loader";

function App() {
  const Home = lazy(() => import("./components/pages/Home"));

  window.addEventListener("load", () => {
    setTimeout(() => {
      setTimeout(() => {}, 500);
    }, 5500);
  });

  return (
    <div className="App">
      <Loader />
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
