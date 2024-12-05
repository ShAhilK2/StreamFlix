import React from "react";
import { IMG_CDN_URL } from "../../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 pr-4">
      <img
        alt="poster-picture"
        src={`${IMG_CDN_URL}${posterPath}`}
        className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-all duration-300"
      />
    </div>
  );
};

export default MovieCard;
