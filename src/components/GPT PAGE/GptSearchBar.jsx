import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GEMINI_KEY, lang } from "../../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addGptMovies } from "../../utils/store/gptSlice";

// Initialize the Gemini API client
const genAI = new GoogleGenerativeAI(GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const getMovieSearch = async (movie) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
    API_OPTIONS
  );

  const data = await res.json();

  return data.results;
};

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const identifier = useSelector((state) => state.config.lang);
  const inputref = useRef(null);

  const handleSearch = async () => {
    const query = inputref.current.value;
    if (!query) {
      console.log("Please enter a valid search query.");
      return;
    }

    const prompt = `Act as a Movie Recommendation system and suggest some movies for the query: ${query}.and also perform all genre that i take in prompt Only provide the names of 5 movies, comma separated.
    Example results : 3 idiots,deadpool,tara rum pum ,koi mil gaya,golmaal`;

    try {
      // Fetch movie recommendations from the Gemini API
      const result = await model.generateContent(prompt);
      const recommendations = result.response.text(); // Movie names are returned in the response
      const formattedRecommendations = recommendations
        .split(",")
        .map((movie) => movie.trim())
        .join(", ");

      console.log(formattedRecommendations);

      const geminiMovies = formattedRecommendations.split(",");
      console.log(geminiMovies);

      //   getMovieSearch(geminiMovies[0]);

      const promiseArray = geminiMovies.map((movie) => getMovieSearch(movie));
      //   [Promise, Promise, Promise, Promise, Promise];

      const AllMoviesArray = await Promise.all(promiseArray);

      console.log(AllMoviesArray);
      dispatch(
        addGptMovies({
          gptMoviesNames: geminiMovies,
          gptMoviesResults: AllMoviesArray,
        })
      );
      // Optionally, display the recommendations in the UI
    } catch (error) {
      console.error("Error fetching movie recommendations:", error);
    }
  };

  return (
    <div className="pt-[30%] lg:pt-[10%] flex justify-center  align-middle w-full ">
      <form
        className="w-full max-w-3xl bg-black rounded-lg shadow-lg grid grid-cols-12 gap-4 p-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputref}
          type="text"
          className="p-4 m-0 col-span-12 md:col-span-9 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder={lang[identifier].inputPlaceholder}
        />
        <button
          className="px-4 py-2 bg-red-600 text-white rounded-md col-span-12 md:col-span-3 mt-4 md:mt-0 hover:bg-red-700 transition-all duration-300"
          onClick={handleSearch}
        >
          {lang[identifier].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
