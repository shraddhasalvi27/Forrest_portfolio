import { useState } from "react";
import { Play, Pause } from "lucide-react"; // Ensure lucide-react is installed

const MusicCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
    // Optional: open external link on play
    if (!isPlaying) {
      window.open(
        "https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC",
        "_blank"
      );
    }
  };

  return (
    <div className="rounded-xl text-white flex flex-col gap-3 w-full max-w-sm mx-auto">
      {/* Album / Runway Image */}
      <img
        src="/images/galaxy.jpg"
        alt="Aurora"
        className="w-full h-32 rounded-lg object-cover"
      />

      {/* Song Info + Play Button */}
      <div className="w-full rounded-md border border-white/10 bg-white/5 backdrop-blur-md p-2 ">
        {/* Song Info + Play Button */}
        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="text-sm font-thin text-white">
              Running with the Wolves
            </h3>
            <p className="text-sm text-gray-400">Aurora</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between w-full gap-4">
          {/* Progress Bar */}
          <div className="flex-1 h-1 bg-gray-700 rounded">
            <div className="w-1/4 h-full bg-white rounded"></div>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="text-white hover:text-pink-500 transition"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
        </div>
      </div>

      {/* Optional external link */}
      <div className="border-l-4 border-pink-500 pl-4 italic text-xs text-white/80">
        “I was listening to the ocean, I saw a face in the sand.”
      </div>
    </div>
  );
};

export default MusicCard;
