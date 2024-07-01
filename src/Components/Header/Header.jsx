import React, { useEffect, useState } from "react";
import "./header.css";

const Header = ({ movie }) => {
  const [random, setrandom] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        currentIndex === random.length - 1 ? 0 : currentIndex + 1
      );
    }, 3000);


    return () => clearInterval(interval);
  }, [currentIndex, random.length]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === random.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? random.length - 1 : currentIndex - 1);
  };

  useEffect(() => {
    if (movie.length > 0) {
      selectRandomItems();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie]);

  const selectRandomItems = () => {
    const shuffled = [...movie].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);
    setrandom(selected);
  };

  return (
    <div className="header">
      <div className="carousel">
        <button className="carousel-control prev" onClick={prevSlide}>
          &#10094;
        </button>
        {random.map((e, index) => (
          <div
            key={index}
            id="slide"
            className={index === currentIndex ? "slide active" : "slide"}>
            <img
              src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
              alt={e.name}
            />
            <div>
              <h1>{e.title}</h1>
              <p>{e.overview}</p>
              <p>{e.popularity}K 👁️</p>
            </div>
          </div>
        ))}
        <button className="carousel-control next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Header;
