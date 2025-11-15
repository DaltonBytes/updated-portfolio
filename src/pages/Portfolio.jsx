import PageTitle from "../components/PageTitle";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Flight Logbook",
    description: "Logbook webapp with weather integrations.",
    link: "https://github.com/DaltonBytes/logbook",
  },
  {
    id: 2,
    title: "Calculator",
    description:
      "A basic calculator influenced by the final project of The Odin Project Foundations Course.",
    link: "https://github.com/DaltonBytes/calculator",
    demo: "https://daltonbytes.github.io/calculator/",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-[#1E2320] grow pt-28 pb-24 px-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold text-center text-[#E8DCC2] mb-16">
        Portfolio
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="
              rounded-xl border border-[#0F1315]
              bg-[#34372E] p-10 shadow-[6px_6px_0_#0F1315]
              hover:bg-[#3F4337] hover:shadow-[0_0_12px_#3F4337]
              transition-all
              min-h-[260px] flex flex-col justify-start
            "
          >
            <h2 className="text-2xl font-semibold text-[#E8DCC2] mb-3">
              {project.title}
            </h2>

            <p className="text-[#C5C6B3] leading-relaxed text-lg mb-6">
              {project.description}
            </p>

            <div className="mt-auto flex gap-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-2
                  text-[#E8DCC2] underline underline-offset-2 decoration-[#E8DCC2]
                  hover:text-[#F4E8CD] hover:decoration-[#F4E8CD]
                  transition-colors
                "
              >
                <FaGithub size={18} />
                GitHub
              </a>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-2
                    text-[#E8DCC2] underline underline-offset-2 decoration-[#E8DCC2]
                    hover:text-[#F4E8CD] hover:decoration-[#F4E8CD]
                    transition-colors
                  "
                >
                  <FaExternalLinkAlt size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
