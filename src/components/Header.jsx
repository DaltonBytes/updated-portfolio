import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#34372E] text-[#C5C6B3] shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-semibold text-[#E8DCC2] hover:text-[#F0E7D4] transition-colors"
        >
          Egg<span className="text-[#A3B18A]"></span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#E8DCC2] md:hidden focus:outline-none"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-[#34372E] md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 space-y-4 md:space-y-0 p-4 md:p-0">
            {["/", "/about", "/blog", "/portfolio"].map((path, i) => {
              const names = ["Home", "About", "Blog", "Portfolio"];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#A3B18A] font-medium"
                        : "text-[#C5C6B3] hover:text-[#F0E7D4] transition-colors"
                    }
                  >
                    {names[i]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
