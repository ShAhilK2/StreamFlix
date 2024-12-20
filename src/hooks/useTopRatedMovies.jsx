import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatingMovies } from "../utils/store/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getNowPlaying = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await res.json();

    dispatch(addTopRatingMovies(data.results));
  };

  useEffect(() => {
    !topRatedMovies && getNowPlaying();
  }, []);
};

export default useTopRatedMovies;
