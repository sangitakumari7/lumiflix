import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/UseTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import AisearchPage from './AiSearchPage';
import { useSelector } from 'react-redux';

function Browse() {
  const showAiSearch = useSelector((store) => store.aiSearch.aiSearchView);

  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  usePopularMovies();


  return (
    <div>
      <Header/>
      {
      showAiSearch ? (
       <AisearchPage/>
      ) : (
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
      )}
    </div>
  )
}

export default Browse;
