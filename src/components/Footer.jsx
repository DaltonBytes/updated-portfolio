import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3B3A30] text-[#EDE6D8] py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dalton McMullen
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://github.com/DaltonBytes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C2B280] transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/daltonmcmullen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C2B280] transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
