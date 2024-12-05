import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../SecondaryContainer/MovieList";
import Footer from "../footer";

const GptSearchMovieSuggestion = () => {
  const { gptMoviesNames, gptMoviesResults } = useSelector(
    (state) => state.gpt
  );

  // Check if data is available
  if (!gptMoviesNames || !gptMoviesResults) return null;

  return (
    <div className="p-8 lg:p-16 text-white bg-black bg-opacity-30 min-h-screen">
      <h1 className="text-center text-4xl lg:text-5xl font-extrabold ">
        Movie Suggestions
      </h1>
      <div className="grid grid-cols-1 ">
        {gptMoviesNames.map((movieName, index) => (
          <div
            key={movieName}
            className=" bg-opacity-70 rounded-lg shadow-lg p-6 flex flex-col justify-between"
          >
            <MovieList title={movieName} movies={gptMoviesResults[index]} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default GptSearchMovieSuggestion;
