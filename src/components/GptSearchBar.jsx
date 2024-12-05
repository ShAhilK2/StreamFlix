import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../utils/constants";

const GptSearchBar = () => {
  const identifier = useSelector((state) => state.config.lang);
  return (
    <div className="pt-[10%] flex justify-center w-full">
      <form className="w-full max-w-3xl bg-black rounded-lg shadow-lg grid grid-cols-12 gap-4 p-4">
        <input
          type="text"
          className="p-4 m-0 col-span-12 md:col-span-9 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder={lang[identifier].inputPlaceholder}
        />
        <button className="px-4 py-2 bg-red-600 text-white rounded-md col-span-12 md:col-span-3 mt-4 md:mt-0 hover:bg-red-700 transition-all duration-300">
          {lang[identifier].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
