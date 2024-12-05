import { CiCircleInfo } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[30%]  sm:pt-[20%] md:pt-48 lg:pt-60 pl-5 sm:pl-12 md:pl-16 lg:pl-8 flex justify-start items-start absolute">
      {/* Gradient background container */}
      <div className=" max-w-3xl w-full">
        <div className="max-w-3xl w-full">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-white">
            {title}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-white mb-2">
            {overview}
          </p>
          <div className="space-x-4 flex ">
            <button className="px-6 py-2 bg-white text-black rounded flex items-center gap-2 hover:bg-opacity-50 hover:text-black transition-all">
              <FaPlay /> Play More
            </button>
            <button className="px-6 py-2 bg-gray-500 bg-opacity-30 text-white rounded flex items-center gap-2 hover:bg-opacity-20 transition-all">
              <CiCircleInfo /> Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
