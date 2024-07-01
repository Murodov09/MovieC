import React from "react";
import Movie from "../../Components/Movie/Movie";
import Header from "../../Components/Header/Header";

const Firstp = ({ movie }) => {
  console.log(movie);

  return (
    <>
      <Header movie={movie} />
      <Movie movie={movie} />
    </>
  );
};

export default Firstp;
