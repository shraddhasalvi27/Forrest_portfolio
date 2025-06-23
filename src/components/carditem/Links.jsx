const LinksCard = () => {
  const linkClasses =
    " px-2 rounded-md border border-white/10 outline outline-1 outline-white/5 outline-offset-2 hover:scale-105 transition";

  return (
    <div className="w-full rounded-xl border border-white/10   outline-offset-2 shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-white/5 backdrop-blur-md text-white p-2">
      <div className="flex justify-evenly text-xl gap-3 flex-wrap">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses + " hover:text-gray-400"}
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses + " hover:text-blue-400"}
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses + " hover:text-white"}
        >
          <i className="fab fa-x-twitter"></i>
        </a>
        <a
          href="mailto:yourmail@gmail.com"
          className={linkClasses + " hover:text-red-400"}
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://discord.com/users/YOUR_DISCORD_USER_ID"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses + " hover:text-indigo-400"}
        >
          <i className="fab fa-discord"></i>
        </a>
      </div>
    </div>
  );
};

export default LinksCard;
