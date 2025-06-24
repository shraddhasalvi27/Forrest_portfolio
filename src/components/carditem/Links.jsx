const LinksCard = () => {
  const linkClasses =
    " px-2 rounded-md border border-white/10 outline outline-1 outline-white/5 outline-offset-2 hover:scale-105 transition";

  return (
    <div className="w-full rounded-xl border border-white/10   outline-offset-2 shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-white/5 backdrop-blur-md text-white p-2">
      <div className="flex justify-evenly text-xl gap-3 flex-wrap">
        <a
          href="https://github.com/shraddhasalvi27"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses + " hover:text-gray-400"}
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/shraddha-salavi-7a4671215"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses + " hover:text-gray-400"}
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/@forrest2772"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses + " hover:text-gray-100"}
        >
          <i className="fab fa-x-twitter"></i>
        </a>
        <a
          href="mailto:shraddhasalvi272@gmail.com"
          className={linkClasses + " hover:text-gray-100"}
        >
          <i className="fas fa-envelope"></i>
        </a>

        <a
          href="https://discord.com/users/shrey5928"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses + " hover:text-indigo-400"}
        >
          <i className="fab fa-discord"></i>
        </a>
        <a
          href="https://instagram.com/__.shraddha27"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClasses + " hover:text-pink-400"}
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default LinksCard;
