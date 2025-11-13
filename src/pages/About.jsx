import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import PilotEgg from "../assets/pilot_egg.png";
import CodingEgg from "../assets/coder_egg.png";
import CyclingEgg from "../assets/cyclist_egg.png";

const aboutSections = [
  {
    id: 1,
    label: "Pilot",
    description:
      "As a pilot, I have honed precision, discipline, and the ability to stay calm under pressure — skills that translate to everything I do.",
    image: PilotEgg,
  },
  {
    id: 2,
    label: "Software Developer",
    description:
      "I enjoy building software solutions, learning new languages and frameworks, and creating applications that solve real-world problems.",
    image: CodingEgg,
  },
  {
    id: 3,
    label: "Program Manager",
    description:
      "Managing programs taught me how to coordinate teams, meet deadlines, and deliver complex projects efficiently.",
    image: PilotEgg,
  },
  {
    id: 4,
    label: "Videographer",
    description:
      "Videography allows me to tell stories visually, capturing moments with creativity and precision.",
    image: PilotEgg,
  },
  {
    id: 5,
    label: "Hobbyist",
    description:
      "From tinkering with electronics to learning new hobbies, I enjoy exploring things outside my professional life.",
    image: CyclingEgg,
  },
  {
    id: 6,
    label: "Graduate",
    description:
      "My academic journey has shaped my thinking, problem-solving, and provided a foundation for my career and personal growth.",
    image: PilotEgg,
  },
];

export default function About() {
  const location = useLocation();
  const [highlighted, setHighlighted] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        setHighlighted(id);

        const timer = setTimeout(() => setHighlighted(null), 1500);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  return (
    <section className="bg-[#1E2320] text-[#C5C6B3] grow pt-32 pb-24 px-8">
      <h1 className="text-center text-4xl font-semibold text-[#E8DCC2] mb-16">
        About Me
      </h1>
      <div className="space-y-20 max-w-6xl mx-auto">
        {aboutSections.map((sec, index) => (
          <div
            key={sec.id}
            id={`egg${sec.id}`}
            className={`
            flex flex-col md:flex-row items-center gap-10 rounded-xl border border-[#0F1315]
            bg-[#34372E] p-8 transition-all duration-500
            ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
            ${
              highlighted === `egg${sec.id}`
                ? "bg-[#3F4337] shadow-[0_0_10px_#3F4337,6px_6px_0_#0F1315]"
                : "shadow-[6px_6px_0_#0F1315]"
            }
          `}
          >
            <img
              src={sec.image}
              alt={sec.label}
              className="w-40 h-52 object-contain drop-shadow-xl"
            />
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-[#E8DCC2] mb-3">
                {sec.label}
              </h2>
              <p className="leading-relaxed text-[#C5C6B3]">
                {sec.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
