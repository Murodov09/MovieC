import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Movie from "./Components/Movie/Movie";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Firstp from "./Pages/First/Firstp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Secondp from "./Pages/Secondp/Secondp";
import MovieInfo from "./Components/Movieinfo/MovieInfo";
function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (item) => {
    setFavorites((prevFavorites) => {
      let updatedFavorites;
      if (prevFavorites.some((fav) => fav.id === item.id)) {
        updatedFavorites = prevFavorites.filter((fav) => fav.id !== item.id);
      } else {
        updatedFavorites = [...prevFavorites, item];
      }
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const [movie, setMovie] = useState([]);

  const getmovie = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWEzYmNmMDMzNWU5MDg0OTgwYjRlMWE4MmVkMmU5YiIsInN1YiI6IjY2NmMxNDA3Y2UyMjkzZGQ0NjIzNmVmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3dEPkv-WiOHiKinhymzTynp9yY2evylw5HYtqQ6Kpqc",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => setMovie(response.results))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getmovie();
  }, []);

  return (
    <>
      <div className="con">
        <BrowserRouter>
          <Navbar movie={movie} />
          <Routes>
            <Route path="/" element={<Firstp movie={movie} />} />
            <Route
              path="/favourite_list"
              element={
                <Secondp
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
            <Route
              path="/movie_info/:id"
              element={
                <MovieInfo
                  movie={movie}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              }
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
