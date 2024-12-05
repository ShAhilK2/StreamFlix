import React from "react";
import MovieCard from "./MovieCard";
// import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <div className="w-screen p-4">
      <h1 className="py-4 font-bold text-white text-2xl">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            //  <Link to="/movieDetails" key={movie.id}>
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
            //  </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
