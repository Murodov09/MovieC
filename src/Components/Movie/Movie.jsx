import React from "react";
import "./Movie.css";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="section">
      <h1 className="hero_text">Movies</h1>
      <div className="movie_kit">
        {movie.map((e) => {
          return (
            <>
              <div key={e.id} className="card bg-base-100 w-86 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                    alt="Movie"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{e.title}</h2>
                  <p>{e.popularity}K 👁️</p>
                  <div className="card-actions">
                    <Link to={`/movie_info/${e.id}`}>
                      {" "}
                      <button
                        onClick={scrollToTop}
                        className="btn btn-outline btn-success w-40">
                        Watch
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Movie;
