import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchMovieSuggestion from "./GptSearchMovieSuggestion";
import { BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="h-screen absolute inset-0 -z-10">
        <img
          src={BACKGROUND_IMAGE}
          alt="background-image"
          className="w-full h-full object-cover"
        />
      </div>
      <GptSearchBar />
      <GptSearchMovieSuggestion />
    </div>
  );
};

export default GptSearch;
