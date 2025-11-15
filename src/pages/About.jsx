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
      "I had the privilege of serving as a U.S. Navy pilot, conducting operational missions in the MH-60S Seahawk aboard the USS Carl Vinson and later instructing new aviators in the T-6B Texan II. The experience strengthened my technical judgment, communication, and ability to perform under pressure; skills that continue to guide my work today.",
    image: PilotEgg,
  },
  {
    id: 2,
    label: "Software Developer",
    description:
      "While expanding my technological expertise, I discovered my passion for building software. I’ve always gravitated toward creating tools that streamline workflows and eliminate tedious tasks. That includes everything from a lightweight CLI utility written in Rust to a full-stack logbook web app with integrated weather data. I love the impact that well-designed software can have. With the addition of modern AI tools, it truly feels like the possibilities are limitless.",
    image: CodingEgg,
  },
  {
    id: 3,
    label: "Program Manager",
    description:
      "One mantra I’ve always lived by is to leave every system better than I found it. In the Navy, I applied that mindset by redesigning program workflows, optimizing processes, and reducing operational friction across technical and cross-functional teams. I brought together the right tools, data, and people to improve efficiency and deliver scalable, high-quality outcomes.",
    image: PilotEgg,
  },
  {
    id: 4,
    label: "Videographer",
    description: (
      <>
        I run{" "}
        <a
          href="https://www.youtube.com/@flyingegg761"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E8DCC2] underline underline-offset-2 decoration-[#E8DCC2] hover:text-[#F4E8CD] hover:decoration-[#F4E8CD] transition-colors duration-200"
        >
          Flying Egg Productions
        </a>
        , my little corner of YouTube where I post videography projects, camping
        adventures, and whatever else I’m excited to capture. I love recording
        moments so I can share them with friends, family, and my future self. I
        didn’t grow up with many home videos, so part of the joy is knowing I’ll
        be able to give my future kids the memories I never had.
      </>
    ),

    image: PilotEgg,
  },
  {
    id: 5,
    label: "Hobbyist",
    description:
      "I’m always outside looking for my next adventure. I’m into running, biking, pickleball, camping, and pretty much anything that keeps me moving. When I’m not out in the wild, I’m with my wife and our new pup discovering new restaurants and trying something different every week. I also love tinkering with my vehicles and finding small ways to upgrade or improve them.",
    image: CyclingEgg,
  },
  {
    id: 6,
    label: "Graduate",
    description:
      "I graduated from the University of Nebraska at Lincoln with a B.S. in Meteorology–Climatology. My love for weather started when I was a kid, especially after Hurricane Charley came through my hometown in 2004. That early spark never went away, so I ran with it and earned my degree in the field. Even today, I still find myself tracking storms for fun and staying way too invested in whatever the radar is doing.",
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
    <section className="bg-[#1E2320] text-[#C5C6B3] grow pt-28 pb-24 px-8">
      <h1 className="text-center text-4xl font-semibold text-[#E8DCC2] mb-16">
        About Me
      </h1>
      <div className="space-y-20 max-w-4xl mx-auto">
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
                ? "bg-[#3F4337] shadow-[0_0_25px_8px_#3F4337,8px_8px_0_#0F1315]"
                : "shadow-[6px_6px_0_#0F1315]"
            }
          `}
          >
            <img
              src={sec.image}
              alt={sec.label}
              className="w-40 h-52 object-contain drop-shadow-xl shrink-0"
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
