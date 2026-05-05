import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { RiGeminiFill } from "react-icons/ri";
import { HiFilm } from "react-icons/hi";

const AiSearchSuggestion = () => {
  const { movieNames, movieResults, isLoading } = useSelector(
    (store) => store.aiSearch
  );

  // Loading state
  if (isLoading) {
    return (
      <div className="w-full bg-[#0d0d0d]/90 backdrop-blur-2xl rounded-2xl overflow-hidden
        border border-white/[0.06]
        shadow-[0_8px_40px_rgba(0,0,0,0.7)]">

        {/* Top accent */}
        <div className="h-[1.5px] bg-gradient-to-r from-transparent via-red-600/80 to-transparent" />

        <div className="flex flex-col items-center justify-center py-16 gap-6">
          {/* Animated logo */}
          <div className="relative">
            <p className="text-[#e50914] text-4xl font-black tracking-[0.2em] select-none"
              style={{ textShadow: "0 0 40px rgba(229,9,20,0.6)" }}>
              LUMNIFLIX
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
              animate-[shimmer_1.8s_infinite]"
              style={{ backgroundSize: "200% 100%" }}
            />
          </div>

          {/* Bouncing dots */}
          <div className="flex gap-2">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#e50914] animate-bounce"
                style={{ animationDelay: `${i * 0.12}s`, animationDuration: "0.9s" }}
              />
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-xs tracking-[0.2em] uppercase">
              AI is thinking
            </p>
            <p className="text-gray-600 text-[10px] tracking-widest mt-1">
              Searching TMDB database...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!movieNames) return null;

  return (
    <div className="w-full">
      <div className="bg-[#0d0d0d]/90 backdrop-blur-2xl rounded-2xl overflow-hidden
        border border-white/[0.06]
        shadow-[0_8px_40px_rgba(0,0,0,0.7),0_0_0_0.5px_rgba(255,255,255,0.04)]
        flex flex-col">

        {/* Top accent line */}
        <div className="h-[1.5px] bg-gradient-to-r from-transparent via-red-600/80 to-transparent shrink-0" />

        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4
          bg-gradient-to-r from-red-950/25 via-[#0d0d0d] to-[#0d0d0d]
          border-b border-white/[0.05] shrink-0">

          <div className="relative w-9 h-9 rounded-xl bg-[#e50914] flex items-center justify-center shrink-0
            shadow-[0_4px_14px_rgba(229,9,20,0.45)]">
            <RiGeminiFill className="text-white text-[15px]" />
          </div>

          <div className="flex-1 min-w-0">
            <h2 className="text-white text-[14px] font-semibold tracking-wide leading-none">
              AI Recommendations
            </h2>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.12em] mt-1">
              {movieNames.length} categories found
            </p>
          </div>

          {/* Stats pill */}
          <div className="flex items-center gap-1.5 bg-red-950/40 border border-red-900/25
            px-3 py-1.5 rounded-full shrink-0">
            <HiFilm className="text-red-500 text-[10px]" />
            <span className="text-red-400 text-[10px] font-medium tracking-wide">
              {movieResults?.reduce((acc, r) => acc + (r?.length ?? 0), 0)} titles
            </span>
          </div>
        </div>

        {/* Results list */}
        <div className="flex flex-col gap-0 max-h-[55vh] overflow-y-auto
          [&::-webkit-scrollbar]:w-[2px]
          [&::-webkit-scrollbar-thumb]:bg-red-800/50
          [&::-webkit-scrollbar-track]:bg-transparent">

          {movieNames.map((movieName, index) => (
            <div
              key={movieName}
              className="border-b border-white/[0.04] last:border-0
                hover:bg-white/[0.015] transition-colors duration-200 group/item"
            >
              {/* Category row */}
              <div className="flex items-center gap-3 px-5 py-3">
                {/* Animated number */}
                <div className="w-6 h-6 rounded-lg bg-[#1a1a1a] border border-white/[0.07]
                  flex items-center justify-center shrink-0
                  group-hover/item:border-red-900/40 transition-colors">
                  <span className="text-gray-600 text-[10px] font-bold group-hover/item:text-red-500 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <span className="text-gray-300 text-[11px] font-medium uppercase tracking-[0.14em] flex-1 truncate
                  group-hover/item:text-white transition-colors">
                  {movieName}
                </span>

                <span className="text-gray-700 text-[10px] shrink-0 group-hover/item:text-gray-500 transition-colors">
                  {movieResults[index]?.length ?? 0} titles
                </span>

                {/* Expand chevron */}
                <svg className="w-3 h-3 text-gray-700 group-hover/item:text-red-600 transition-colors shrink-0"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Movie cards */}
              <div className="pb-3 px-3 overflow-x-auto
                [&::-webkit-scrollbar]:h-[2px]
                [&::-webkit-scrollbar-thumb]:bg-red-800/30
                [&::-webkit-scrollbar-track]:bg-transparent">
                <MovieList
                  title={movieName}
                  movies={movieResults[index]}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-2.5
          bg-[#080808] border-t border-white/[0.04] shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-700 text-[9px] tracking-[0.12em] uppercase">
              Live results
            </span>
          </div>
          <span className="text-[#e50914]/70 text-[9px] font-medium uppercase tracking-[0.1em]">
            Powered by AI ✦
          </span>
        </div>

      </div>
    </div>
  );
};

export default AiSearchSuggestion;