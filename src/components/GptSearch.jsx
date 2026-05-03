import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import BgImg from '../img/bgimg.jpg'

function GptSearch() {
  return (
    <div>
      <div>
        <img
        src={BgImg}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
