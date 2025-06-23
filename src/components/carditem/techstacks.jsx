import { useState } from "react";

const techStacks = [
  "JavaScript", "TypeScript", "React.js", "Next.js", "TailwindCSS", "ReduxToolkit",
  "Node.js", "Express.js", "MongoDB", "PostgreSQL", "HTML5", "CSS3",
  "FramerMotion", "ShadCN/UI", "Vite", "SCSS", "GitHub", "REST APIs",
  "JWT Auth", "ThunderClient", "Jest", "Cypress", "Playwright", "Solana",
  "Markdown", "SEO"
];

const TechStackCard = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="font-inter rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] p-4 bg-white/5 backdrop-blur-md text-white">
      <div className="flex flex-wrap gap-3">
        {techStacks.map((tech, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(idx)}
            className={`cursor-pointer px-2 py-1 text-xs rounded-md border border-white/10 outline-1 outline-white/5 outline-offset-2 transition-all duration-200
              ${
                selected === idx
                  ? "border-pink-500 bg-white/10 text-white"
                  : "bg-white/5 hover:bg-white/20"
              }`}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCard;
