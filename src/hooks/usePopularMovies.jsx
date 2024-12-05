import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/store/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const getNowPlaying = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=2",
      API_OPTIONS
    );
    const data = await res.json();

    dispatch(addPopularMovies(data.results));
  };

  useEffect(() => {
    !popularMovies && getNowPlaying();
  }, []);
};

export default usePopularMovies;
