import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterHome from "./routers/RouterHome";

const App = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Patricia Carreño", "Full Stack Developer", "¡Hola Mundo!"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    document.title = titles[titleIndex];
  }, [titleIndex, titles]);

  return (
    <>
      <div>
        <BrowserRouter>
          <RouterHome />
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
