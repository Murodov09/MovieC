import React from 'react'
import './favourite.css'
import { Link } from 'react-router-dom';

const Secondp = ({ favorites, toggleFavorite }) => {
  return (
    <div className="favourite_div">
      <h1 className="page_text">Favorites</h1>
      {favorites.length > 0 ? (
        <ul className='kit_fav'>
          {favorites.map((item) => (
            <li key={item.id}>
              <Link to={`/movie_info/${item.id}`}>
                   <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt=""
              />
              </Link>
         
              <p>{item.title}</p>

              <button
                className="btn btn-success"
                onClick={() => toggleFavorite(item)}>
                Remove from Favorites
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="fav_no">No favorites yet.🤷‍♂️</p>
      )}
    </div>
  );
};

export default Secondp