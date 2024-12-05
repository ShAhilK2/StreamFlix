import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchMovieSuggestion from "./GptSearchMovieSuggestion";
import { BACKGROUND_IMAGE } from "../../utils/constants";

const GptSearch = () => {
  return (
    <div className="">
      <div className="fixed inset-0 w-screen h-screen sm:min-h-screen -z-10">
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
