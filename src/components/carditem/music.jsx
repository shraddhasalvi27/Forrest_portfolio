import { useRef, useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const MusicCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    // Toggle logic based on current state
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((err) => console.error("Audio play failed:", err));
    }

    setIsPlaying(!isPlaying);
  };

  // Optional: keep UI in sync if user manually pauses the audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("play", handlePlay);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("play", handlePlay);
    };
  }, []);

  return (
    <div className="rounded-xl text-white flex flex-col gap-3 w-full md:max-w-full">
      {/* Album Cover */}
      <img
        src="/images/galaxy.jpg"
        alt="Aurora"
        className="w-full h-32 rounded-xl object-cover"
      />

      {/* Info & Controls */}
      <div className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-2">
        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="text-sm font-thin text-white">
              Running with the Wolves
            </h3>
            <p className="text-sm text-gray-400">Aurora</p>
          </div>
        </div>

        <div className="flex items-center justify-between w-full gap-4 mt-2">
          <div className="flex-1 h-1 bg-gray-700 rounded">
            <div className="w-1/4 h-full bg-white rounded"></div>
          </div>

          <button
            onClick={togglePlay}
            className="text-white hover:text-pink-500 transition"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
      </div>

      {/* Quote */}
      <div className="border-l-4 border-pink-500 pl-4 italic text-xs text-white/80">
        “I was listening to the ocean, I saw a face in the sand.”
      </div>

      {/* Audio */}
      <audio ref={audioRef} loop preload="auto">
        <source src="/audio/LightofTheSeven.mp3" type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default MusicCard;
