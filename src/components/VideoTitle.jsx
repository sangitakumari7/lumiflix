import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 flex items-center text-white  z-10">
      
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      <div className="relative px-6 md:px-16 max-w-xl text-white">
        
        <h1 className="text-4xl md:text-5xl font-bold">
          {title}
        </h1>

        <p className="mt-3 text-sm md:text-base text-gray-300 line-clamp-3">
          {overview}
        </p>

        <div className="flex gap-3 mt-5">
          
          {/* Play Button */}
          <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-md font-medium hover:bg-gray-200 transition">
            <Play size={18} className="text-black fill-black" />
            Play
          </button>

          {/* More Info */}
          <button className="flex items-center gap-2 bg-gray-500/60 text-white px-5 py-2.5 rounded-md font-medium hover:bg-gray-500/40 transition">
            <Info size={18} className="text-white" />
            More Info
          </button>

        </div>
      </div>
    </div>
  );
};

export default VideoTitle;