import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/store/movieSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer/MainContainer";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GPT PAGE/GptSearch";
import Footer from "./footer";

function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGptView = useSelector((state) => state.gpt.showGpt);
  return (
    <div className="overflow-hidden p-0 m-0">
      <Header />

      {showGptView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          <Footer />
        </>
      )}

      {/* 
      MainContainer :
        Video background 
        Title of that movie

      Secondary Container 
        Movie list * n
          MovieCard * n
  
      */}
    </div>
  );
}

export default Browse;
