import TechStackCard from "./techstacks";
import LinksCard from "./Links";
const Second = () => {
  return (
    <div className="flex gap-5 items-stretch">
      {/* Left Column */}
      <div className="flex-[3] flex flex-col gap-3 min-h-[100px]">
        {" "}
        {/* or min-h-screen if full page */}
        <LinksCard />
        {/* Project Card Fills Remaining Space */}
        <div className="flex-1 rounded-xl shadow p-2 flex animate-gradient text-gray-900 backdrop-blur-md border border-white/10">
          <div className="relative w-80 h-32">
            {/* Gear 1 */}
            <i className="fas fa-cog text-white opacity-30 text-4xl animate-spin-slow absolute top-1 left-0 z-10" />

            {/* Gear 2 (slightly offset and different color) */}
            <i className="fas fa-cog text-white text-9xl opacity-30 animate-spin-slow absolute top-3 left-1 z-20" />

            {/* Gear 3 (another offset for depth) */}
            <i className="fas fa-cog text-white text-7xl opacity-30 animate-spin-slow absolute top-1 left-24 z-30" />

            <span className=" font-extrabold text-sm absolute bottom-0 right-2 bg-clip-text text-white drop-shadow-md">
              Projects
            </span>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-[4] h-full">
        <TechStackCard />
      </div>
    </div>
  );
};

export default Second;
