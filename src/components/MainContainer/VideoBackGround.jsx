import { useSelector } from "react-redux";
import useTrailerVideo from "../../hooks/useTrailerVideo";

const VideoBackGround = ({ movieId }) => {
  useTrailerVideo(movieId);
  const trailerVideo = useSelector((state) => state?.movies?.trailerVideo);

  return (
    <div className=" w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&fs=0`}
        title="Movie Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
