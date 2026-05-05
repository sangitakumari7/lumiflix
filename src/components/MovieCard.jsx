const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-44 flex-shrink-0 mr-4 transition-transform duration-300 hover:scale-105">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default MovieCard;