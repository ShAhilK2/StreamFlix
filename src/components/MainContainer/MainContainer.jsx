import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movie = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movie || movie.length < 20) return null; // Ensure at least 20 movies are available

  // Generate a random number between 1 and 19 (inclusive) for movie index
  const randomIndex = Math.floor(Math.random() * 19) + 1;
  const mainMovie = movie[randomIndex];
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id} />
    </div>
  );
};

export default MainContainer;
