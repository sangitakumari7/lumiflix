import React from 'react';
import { useSelector } from 'react-redux';
import useMoviesTrailer from '../hooks/useMoviesTrailer';

function VideoBackground({ movieId }) {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useMoviesTrailer(movieId);

  if (!trailerVideo) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <iframe
        className="absolute top-0 left-0 w-full h-full scale-150 pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo.key}`}
        title="Movie Trailer"
        allow="autoplay; encrypted-media"
      />

      {/* Very light gradient (optional for readability) */}
      <div className="absolute inset-0 bg-black/30"></div>
    </div>
  )
}

export default VideoBackground;