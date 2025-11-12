import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import pilotEgg from "../assets/pilot_egg.png";
import pilotCracked from "../assets/react.svg";

const eggs = [
  {
    id: 1,
    label: "Pilot",
    image: pilotEgg,
    crackedImage: pilotCracked,
  },
  {
    id: 2,
    label: "Software Developer",
    image: "../assets/pilot_egg.png",
    crackedImage: "../assets/react.svg",
  },
  {
    id: 3,
    label: "Program Manager",
    image: "../assets/pilot_egg.png",
    crackedImage: "../assets/react.svg",
  },
  {
    id: 4,
    label: "Videographer",
    image: "../assets/pilot_egg.png",
    crackedImage: "../assets/react.svg",
  },
  {
    id: 5,
    label: "Hobbyist",
    image: "../assets/pilot_egg.png",
    crackedImage: "../assets/react.svg",
  },
  {
    id: 6,
    label: "Graduate",
    image: "../assets/pilot_egg.png",
    crackedImage: "../assets/react.svg",
  },
];

export default function Home() {
  const navigate = useNavigate();

  const handleEggClick = (id) => {
    navigate(`/about#egg${id}`);
  };

  return (
    <section className="bg-[#EEE6D8] flex flex-col items-center pt-20 pb-16 text-center">
      <PageTitle title="Home" />
      <div className="mb-12 max-w-xl">
        <h1 className="text-3xl font-semibold text-[#3B3A30] mb-4">
          Hi, I'm Dalton — callsign Egg
        </h1>
        <p className="text-[#4A4A3F] mb-2">
          Thanks for stopping by! Crack an egg below to find out more about me.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {eggs.map((egg) => (
          <div
            key={egg.id}
            onClick={() => handleEggClick(egg.id)}
            className="group cursor-pointer bg-[#F7F1E5] hover:bg-[#F3EAD4] rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all p-6 flex flex-col items-center"
          >
            {/* Egg Image */}
            <div className="w-32 h-40 relative mb-4">
              <img
                src={egg.image}
                alt={`Egg ${egg.id}`}
                className="absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={egg.crackedImage}
                alt={`Cracked Egg ${egg.id}`}
                className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p className="text-[#4A4A3F] font-medium text-lg">{egg.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
