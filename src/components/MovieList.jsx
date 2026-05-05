import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 py-4 text-white">
      
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-semibold mb-3">
        {title}
      </h2>

      {/* Scroll Row */}
      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {movies?.map((movie) => (
          <MovieCard
            key={movie.id}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;