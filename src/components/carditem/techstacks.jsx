const techStacks = [
  "JavaScript", "TypeScript", "React.js", "Next.js", "TailwindCSS", "ReduxToolkit",
  "Node.js", "Express.js", "MongoDB", "PostgreSQL", "HTML5", "CSS3",
  "FramerMotion", "ShadCN/UI", "Vite", "SCSS", "GitHub", "REST APIs",
  "JWT Auth", "ThunderClient", "Jest", "Cypress", "Playwright", "Solana",
  "Markdown", "SEO"
];

const TechStackCard = () => {
  return (
    <div className="col-span-2 row-span-2 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] p-4 bg-white/5 backdrop-blur-md text-white">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {techStacks.map((tech, idx) => (
          <div
            key={idx}
            className="bg-white/10 text-xs text-center px-3 py-2 rounded-full border border-white/10 hover:bg-white/20 transition-all duration-200"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;
