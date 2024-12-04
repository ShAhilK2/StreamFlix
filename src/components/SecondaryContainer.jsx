import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state?.movies);

  return (
    <div className="bg-black">
      {/* Now Playing Section */}
      <div className="md:-mt-22 lg:-mt-72 pl-5 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />

        <MovieList title={"Popular Movies"} movies={movies?.popularMovies} />
        <MovieList
          title={"Top Rated Movies "}
          movies={movies?.topRatedMovies}
        />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
