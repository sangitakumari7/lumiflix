import { FaSearch } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { IoSparkles } from "react-icons/io5";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import puter from "@heyputer/puter.js";
import {
  MOVIE_SEARCH_DETAILS_TMDB_URL1,
  MOVIE_SEARCH_DETAILS_TMDB_URL2,
  OPTIONS_API_TMDB,
} from "../utils/constants";
import { addAiMovieResult, setAiSearchLoading } from "../utils/aiSearchSlice";

const SUGGESTIONS = [
  "romantic movies",
  "thriller like Inception",
  "feel good Bollywood",
  "mind-bending sci-fi",
  "90s action classics",
];

const AiSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [focused, setFocused] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      MOVIE_SEARCH_DETAILS_TMDB_URL1 + movie + MOVIE_SEARCH_DETAILS_TMDB_URL2,
      OPTIONS_API_TMDB
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchClick = async () => {
    const userInput = searchText.current.value;
    if (!userInput.trim()) return;

    const query = `
      Give exactly 5 movie names for "${userInput}".
      Return ONLY comma separated names.
      No numbering, no explanation.
    `;

    try {
      dispatch(setAiSearchLoading(true));
      const response = await puter.ai.chat(query);
      let movieNames = response?.message?.content;

      if (Array.isArray(movieNames)) {
        movieNames = movieNames.map((c) => c.text).join(" ");
      }
      if (typeof movieNames !== "string") return;

      const suggestedMovies = movieNames
        .split(/,|\n|\d+\./)
        .map((m) => m.trim())
        .filter((m) => m.length > 0);

      const tmdbResults = await Promise.all(
        suggestedMovies.map((movie) => searchMovieTMDB(movie))
      );

      dispatch(addAiMovieResult({ movieNames: suggestedMovies, movieResults: tmdbResults }));
    } catch (error) {
      console.error("Error:", error);
    } finally {
      dispatch(setAiSearchLoading(false));
    }
  };

  const fillSuggestion = (text) => {
    searchText.current.value = text;
    setInputVal(text);
  };

  return (
    <div className="w-full group">

      {/* Card */}
      <div className="relative bg-[#0d0d0d]/90 backdrop-blur-2xl rounded-2xl overflow-hidden
        border border-white/[0.06]
        shadow-[0_8px_40px_rgba(0,0,0,0.7),0_0_0_0.5px_rgba(255,255,255,0.04)]
        transition-all duration-300">

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-600/80 to-transparent" />

        {/* Inner glow when focused */}
        {focused && (
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-transparent to-transparent pointer-events-none rounded-2xl" />
        )}

        <div className="p-5">

          {/* Header row */}
          <div className="flex items-center gap-3 mb-4">
            {/* AI badge */}
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-[#e50914] shrink-0 shadow-[0_4px_14px_rgba(229,9,20,0.5)]">
              <RiGeminiFill className="text-white text-[15px]" />
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-xl border border-red-400/30 animate-ping opacity-40" />
            </div>

            <div className="flex-1">
              <h2 className="text-white text-[15px] font-semibold tracking-wide leading-none">
                AI Movie Search
              </h2>
              <p className="text-gray-500 text-[10px] tracking-[0.12em] uppercase mt-1">
                Powered by Gemini
              </p>
            </div>

            {/* Live indicator */}
            <div className="flex items-center gap-1.5 bg-green-950/60 border border-green-800/30 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-[9px] font-medium uppercase tracking-widest">Live</span>
            </div>
          </div>

          {/* Input + Button */}
          <div className="flex gap-2.5">
            <div className="relative flex-1">
              <input
                ref={searchText}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
                placeholder={lang[langKey]?.aiSearchBarPlaceHolder || "Search for any mood, genre, or vibe..."}
                className="w-full px-4 py-3 pr-10 rounded-xl text-sm text-white placeholder-gray-600
                  bg-white/[0.04] border border-white/[0.08]
                  focus:outline-none focus:border-red-700/60 focus:bg-white/[0.06]
                  transition-all duration-200"
              />
              {inputVal && (
                <button
                  onClick={() => { searchText.current.value = ""; setInputVal(""); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-400 text-xs transition"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              onClick={handleSearchClick}
              className="flex items-center gap-2 px-5 py-3 rounded-xl shrink-0
                bg-[#e50914] hover:bg-[#f01020] active:scale-95
                text-white text-sm font-semibold tracking-wide
                shadow-[0_4px_20px_rgba(229,9,20,0.4)]
                hover:shadow-[0_4px_28px_rgba(229,9,20,0.6)]
                transition-all duration-150"
            >
              <FaSearch className="text-xs" />
              <span>{lang[langKey]?.search || "Search"}</span>
            </button>
          </div>

          {/* Quick suggestions */}
          <div className="flex items-center gap-2 mt-3 flex-wrap">
            <IoSparkles className="text-gray-600 text-[10px] shrink-0" />
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => fillSuggestion(s)}
                className="text-[10px] text-gray-500 hover:text-red-400
                  bg-white/[0.03] hover:bg-red-950/30
                  border border-white/[0.06] hover:border-red-800/40
                  px-2.5 py-1 rounded-full transition-all duration-150 tracking-wide"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSearchBar;