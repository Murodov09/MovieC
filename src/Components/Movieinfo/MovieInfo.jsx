import React from 'react'
import { useParams } from 'react-router-dom'
import './movieinfo.css'

const MovieInfo = ({ movie, favorites, toggleFavorite }) => {
  console.log(movie);

  const { id } = useParams();
  const film = movie.find((p) => p.id === parseInt(id));

  if (!film) {
    return <h1>Topilmadi</h1>;
  }
  return (
    <div className="movieinfo_div">
      <div className="back_div">
        <img
          className="back_img"
          src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
          alt=""
        />
      </div>

      <img
        className="movie_img"
        src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
        alt={film.title}
      />
      <h1 className="movie_title">{film.title}</h1>
      <p className="movie_about">{film.overview}</p>
      <div className="movie_main_info">
        <p>{film.popularity}K 👁️</p>
        <span></span>
        <p>{film.release_date} 📆</p>
        <span></span>
        <p>{film.original_language} </p>
      </div>
      <button
        className="btn btn-success favourite_btn"
        onClick={() => toggleFavorite(film)}>
        {favorites.some((fav) => fav.id === film.id)
          ? "Remove from Favorites"
          : "Add to Favorites"}
      </button>
    </div>
  );
};

export default MovieInfo