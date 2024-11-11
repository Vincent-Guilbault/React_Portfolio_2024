import Logo from "../assets/VG_Logo_white.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={Logo} alt="Logo" className="h-12 w-12" />
      </div>
      <div className="sm:m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/vincentguilbault/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-white"
        >
          <FaLinkedin />
          <span className="absolute inset-0 rounded-full bg-purple-100 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50"></span>
        </a>
        <a
          href="https://github.com/Vincent-Guilbault"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-white"
        >
          <FaGithub />
          <span className="absolute inset-0 rounded-full bg-purple-100 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-50"></span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
