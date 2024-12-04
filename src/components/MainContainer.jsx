import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movie = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movie) return;
  const mainMovie = movie[7];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
