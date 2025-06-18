const LinksCard = () => {
  return (
    <div className="col-span-1 row-span-1 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center bg-white/5 backdrop-blur-md text-white">
      <div className="grid grid-cols-2 gap-5 text-3xl md:text-4xl">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <i className="fab fa-x-twitter"></i>
        </a>
        <a
          href="mailto:yourmail@gmail.com"
          className="hover:text-red-400 transition"
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://discord.com/users/YOUR_DISCORD_USER_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-400 transition"
        >
          <i className="fab fa-discord"></i>
        </a>
      </div>
    </div>
  );
};

export default LinksCard;
