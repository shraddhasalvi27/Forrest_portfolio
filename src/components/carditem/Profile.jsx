const Profile = () => {
  return (
    <div className="rounded-xl px-6 py-5 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-white/5 backdrop-blur-md text-white space-y-5">
      {/* Top: Profile Info */}
      <div className="flex items-center gap-3">
        <img
          src="images/profile.jpg" // replace with your actual image path
          alt="Shraddha Salvi"
          className="w-12 h-12 rounded-full object-cover border border-white/20"
        />
        <div>
          <h2 className="text-lg">Shraddha Salvi</h2>
          <span className="inline-block bg-gradient-to-r from-pink-500 via-rose-400 to-orange-400 text-xs px-2 rounded-full font-light">
            Fullstack
          </span>
        </div>
      </div>

      {/* Bio Section */}
      <div className="space-y-1 text-sm leading-relaxed text-white/90 font-thin">
        <p>
          Full Stack Developer (MERN) with hands-on project experience. From
          rural Ratnagiri, driven to build and uplift through tech Always
          learning — React, Web3, automation, open source Always learning —
          React, Web3, automation, open source
        </p>
        Creative thinker blending logic, design, and curiosity
      </div>

      {/* Footer: Tagline and Location */}
      <div className="flex items-end justify-between">
        <p className="text-xs italic text-gray-400">
          “Stay foolish, stay hungry.”
        </p>
        <p className="text-sm text-gray-300"> Mumbai, India</p>
      </div>
    </div>
  );
};

export default Profile;
