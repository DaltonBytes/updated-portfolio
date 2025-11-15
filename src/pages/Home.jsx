import { useNavigate } from "react-router-dom";

import pilotEgg from "../assets/pilot_egg.png";
import pilotCracked from "../assets/react.svg";
import cycleEgg from "../assets/cyclist_egg.png";
import coderEgg from "../assets/coder_egg.png";
import pmEgg from "../assets/pilot_egg.png"; // temp placeholder
import videoEgg from "../assets/pilot_egg.png"; // temp placeholder
import gradEgg from "../assets/pilot_egg.png"; // temp placeholder

const eggs = [
  { id: 1, label: "Pilot", image: pilotEgg, crackedImage: pilotCracked },
  {
    id: 2,
    label: "Software Developer",
    image: coderEgg,
    crackedImage: pilotCracked,
  },
  { id: 3, label: "Program Manager", image: pmEgg, crackedImage: pilotCracked },
  { id: 4, label: "Videographer", image: videoEgg, crackedImage: pilotCracked },
  { id: 5, label: "Hobbyist", image: cycleEgg, crackedImage: pilotCracked },
  { id: 6, label: "Graduate", image: gradEgg, crackedImage: pilotCracked },
];

export default function Home() {
  const navigate = useNavigate();

  const handleEggClick = (id) => {
    navigate(`/about#egg${id}`);
  };

  return (
    <section className="bg-[#1E2320] flex flex-col items-center pt-28 pb-24 text-center">
      <div className="mb-12 max-w-xl">
        <h1 className="text-4xl font-semibold text-[#E8DCC2] mb-4 mx-8">
          Hi, I'm Dalton — callsign Egg
        </h1>
        <p className="text-[#C5C6B3] text-xl mx-16 font-semibold">
          Crack an egg below to learn more about me.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {eggs.map((egg) => (
          <div
            key={egg.id}
            onClick={() => handleEggClick(egg.id)}
            className="group cursor-pointer bg-[#34372E] hover:bg-[#3F4337] border border-[#0F1315]
                       rounded-xl shadow-[4px_4px_0_#0F1315] transition-all p-6 flex flex-col items-center"
          >
            <div className="w-32 h-40 relative mb-4">
              <img
                src={egg.image}
                alt={egg.label}
                className="absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={egg.crackedImage}
                alt={`${egg.label} cracked`}
                className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <p className="text-[#E8DCC2] font-medium text-lg">{egg.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
