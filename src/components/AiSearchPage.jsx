import BgImg from '../img/bgimg.jpg';
import AiSearchBar from "./AiSearchBar";
import AiSearchSuggestion from "./AiSearchSuggestion";

const AiSearchPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">

      {/* 🌌 Background */}
      <div className="fixed inset-0 -z-10">
        <img
          className="w-full h-full object-cover scale-110 blur-[3px]"
          src={BgImg}
          alt="background"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Purple spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_60%)]" />

        {/* Animated glow */}
        <div className="absolute inset-0 opacity-20 animate-pulse bg-gradient-to-tr from-violet-900 via-transparent to-black" />

        {/* Texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 3px)",
          }}
        />
      </div>

      {/* 🚀 Main Container */}
      <div className="relative z-40 flex justify-center pt-24 px-3">

        <div
          className="
            w-full md:w-10/12 lg:w-[820px]
            flex flex-col gap-5

            backdrop-blur-3xl
            bg-white/[0.04]
            border border-white/[0.08]

            rounded-3xl
            p-5 md:p-6

            shadow-[0_25px_90px_rgba(0,0,0,0.85),inset_0_0_40px_rgba(255,255,255,0.04)]

            transition-all duration-300 hover:scale-[1.01]
          "
        >

          {/* ✨ Top Glow Line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-90" />

          {/* 🧠 Title */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-wide
              bg-gradient-to-r from-violet-400 to-violet-600
              bg-clip-text text-transparent">
              AI Movie Discovery
            </h1>

            <p className="text-gray-500 text-xs tracking-[0.25em] uppercase mt-2">
              Find movies by mood, vibe & imagination
            </p>
          </div>

          {/* 🔍 Components */}
          <AiSearchBar />
          <AiSearchSuggestion />

        </div>
      </div>
    </div>
  );
};

export default AiSearchPage;