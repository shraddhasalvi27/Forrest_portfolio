const Profile = () => {
  return (
    <div className="mx-auto relative rounded-xl px-4 sm:px-6 py-4 sm:py-5 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-white/5 backdrop-blur-md text-white space-y-5 overflow-hidden">
      
      {/* Top Left Gradient */}
      <div className="absolute top-0 left-0 w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-rose-400/20 via-purple-500/10 to-transparent rounded-full pointer-events-none blur-xl" />

      {/* Bottom Right Gradient */}
      <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-tl from-orange-500/20 via-pink-500/10 to-transparent rounded-full pointer-events-none blur-2xl" />

      {/* Top: Profile Info */}
      <div className="flex items-center gap-3 relative z-10">
        <img
          src="images/profile.jpg"
          alt="Shraddha Salvi"
          className="w-12 h-12 rounded-full object-cover border border-white/20"
        />
        <div>
          <h2 className="text-base sm:text-base text-white font-extrabold">Shraddha Salvi</h2>
          <span className="inline-block bg-gradient-to-r from-pink-800 via-rose-500 to-orange-600 text-xs px-2 rounded-full font-light">
            Fullstack
          </span>
        </div>
      </div>

      {/* Bio Section */}
      <div className="space-y-1 text-sm leading-relaxed text-white font-thin relative z-10">
        <p>
          Full Stack Developer (MERN) with hands-on project experience. From
          rural Ratnagiri, driven to build and uplift through tech. Always
          learning — React, Web3, automation, open source.
        </p>
        Creative thinker blending logic, design, and curiosity.
      </div>

      {/* Footer: Tagline and Location */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 sm:gap-0 relative z-10">
        <p className="text-xs italic text-gray-400">
          “Stay foolish, stay hungry.”
        </p>
        <p className="text-sm text-gray-300">Mumbai, India</p>
      </div>
    </div>
  );
};

export default Profile;
