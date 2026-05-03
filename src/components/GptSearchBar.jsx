import React from 'react'
import lang from '../utils/languageConstant';
import { useSelector } from 'react-redux';

function GptSearchBar() {

    const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="flex justify-center mt-20 px-4">
      
      <form className="flex w-full max-w-2xl">
        
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="flex-1 px-6 py-4 text-white bg-black/80 border border-gray-600 rounded-l-full focus:outline-none focus:border-red-500 text-lg"
        />

        <button
          className="px-8 py-4 bg-red-600 text-white font-semibold rounded-r-full hover:bg-red-700 transition duration-300"
        >
          {lang[langKey].search}
        </button>

      </form>

    </div>
  )
}

export default GptSearchBar