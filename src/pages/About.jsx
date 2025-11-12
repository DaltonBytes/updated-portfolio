import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import PilotEgg from "../assets/pilot_egg.png";

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
    image: PilotEgg,
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
    image: PilotEgg,
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
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        setHighlighted(id);
        const timer = setTimeout(() => setHighlighted(null), 1500); // 1.5s highlight
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  return (
    <>
      <PageTitle title="About" />
      <section className="bg-[#EEE6D8] text-[#3B3A30] p-8">
        <h1 className="text-3xl font-semibold mb-12 text-center">About Me</h1>
        <p className="text-1xl font-semibold mb-12 text-center">
          I've worn many hats in my time. Here are the ones that describe me
          best!
        </p>

        <div className="space-y-16">
          {aboutSections.map((section, index) => (
            <div
              key={section.id}
              id={`egg${section.id}`}
              className={`flex flex-col md:flex-row items-center transition-all duration-500 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              } ${highlighted === `egg${section.id}` ? "bg-[#C2B280] rounded-xl p-4 md:p-6" : ""}`}
            >
              <div className="w-32 h-40 shrink-0 mx-auto md:mx-0">
                <img
                  src={section.image}
                  alt={section.label}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>

              <div className="md:w-1/2 mt-6 md:mt-0 md:px-8">
                <h2 className="text-2xl font-bold mb-2">{section.label}</h2>
                <p className="text-gray-700">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
