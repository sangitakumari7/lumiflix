const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex items-center z-10">
      
      <div className="px-8 md:px-20 max-w-2xl text-white">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          {title}
        </h1>

        {/* Overview */}
        <p className="mt-4 text-sm md:text-lg text-gray-300 line-clamp-3">
          {overview}
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          
          {/* Play Button */}
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 transition">
            ▶ Play
          </button>

          {/* More Info */}
          <button className="flex items-center gap-2 bg-gray-500/70 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-500/50 transition">
            ℹ More Info
          </button>

        </div>
      </div>
    </div>
  )
}

export default VideoTitle;