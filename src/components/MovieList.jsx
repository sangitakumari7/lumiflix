import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 text-white">
      <h2 className="py-4 text-xl md:text-3xl">{title}</h2>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;