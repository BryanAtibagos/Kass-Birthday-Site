import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import myLove from "./assets/music/myLove.mp3";
import kass from "./assets/kass.png";
const Song = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateTime);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateTime);
    };
  }, []);

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section
      name="Song"
      className="w-full min-h-screen flex items-center justify-center bg-[#ffffff] px-4"
    >
      <div className="w-full max-w-5xl flex flex-col md:flex-row overflow-hidden rounded-3xl shadow-2xl">
        {/* LEFT - PLAYER (Spotify dark side) */}
        <div className="w-full md:w-1/2 bg-[#121212] text-white p-6 flex flex-col justify-center">
          {/* Album */}
          <div className="flex justify-center">
            <div
              className={`w-64 h-64 rounded-2xl overflow-hidden shadow-2xl ${
                isPlaying ? "animate-pulse" : ""
              }`}
            >
              <img
                src={kass}
                alt="cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Song Info */}
          <div className="text-center mt-6">
            <h1 className="text-xl font-bold">My Love Mine All Mine</h1>
            <p className="text-gray-400 text-sm mt-1">Mitski</p>
          </div>

          {/* Progress */}
          <div className="mt-6">
            <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 transition-all"
                style={{
                  width: `${(currentTime / duration) * 100 || 0}%`,
                }}
              />
            </div>

            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center mt-8">
            <button
              onClick={togglePlay}
              className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl shadow-lg"
            >
              {isPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
            </button>
          </div>

          <audio ref={audioRef} src={myLove} loop />
        </div>

        {/* RIGHT - GREEN MESSAGE (CONNECTED LYRICS STYLE) */}
        <div className="w-full md:w-1/2 bg-[oklch(0.5_0.26_307.1)]  text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">For You 🤍</h2>

          <div className="space-y-5 text-sm md:text-base leading-relaxed opacity-95">
            <p>This song always reminds me of you.</p>

            <p>You feel like something soft I never want to lose.</p>

            <p className="pb-3 pt-3">
              Like Mitski said, “my love mine all mine” — and in every version
              of this life, I still choose you.
            </p>

            <p>You are my calm, my home, my favorite feeling.</p>
          </div>

          <p className="text-pink-500 font-medium text-sm pt-4">
            — always yours 💗
          </p>
        </div>
      </div>
    </section>
  );
};

export default Song;
