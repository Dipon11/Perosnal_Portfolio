import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-lg border-b border-gray-700 shadow-[0_4px_20px_rgba(59,130,246,0.2)] mb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-3xl font-extrabold text-white tracking-wide">
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              dipon
            </span>
            <span className="text-gray-500">.dev</span>
          </a>

          {/* Mobile Menu Toggle */}
          <div
            className={`w-8 h-6 flex flex-col justify-between items-center cursor-pointer z-50 md:hidden`}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`w-full h-0.5 bg-cyan-400 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}
            ></span>
            <span
              className={`w-full h-0.5 bg-cyan-400 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-full h-0.5 bg-cyan-400 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
            ></span>
          </div>

          {/* Links for md and larger screens */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white text-lg hover:text-cyan-400 transition-all duration-300 font-semibold">Home</a>
            <a href="#projects" className="text-white text-lg hover:text-cyan-400 transition-all duration-300 font-semibold">Projects</a>
            <a href="#about" className="text-white text-lg hover:text-cyan-400 transition-all duration-300 font-semibold">About</a>
            <a href="#contact" className="text-white text-lg hover:text-cyan-400 transition-all duration-300 font-semibold">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu for when the menu is open */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 md:hidden">
          <div className="flex flex-col items-center justify-center space-y-6 py-10">
            <a href="#home" className="text-white text-lg hover:text-cyan-400 transition-all duration-300 font-semibold">Home</a>
            <a href="#projects" className="text-white text-lg hover:text-cyan-400 transition-all duration-300 font-semibold">Projects</a>
            <a href="#about" className="text-white text-lg hover:text-cyan-400 transition-all duration-300 font-semibold">About</a>
            <a href="#contact" className="text-white text-lg hover:text-cyan-400 transition-all duration-300 font-semibold">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

// CSS for Glow Effect (optional)
const glowEffectStyles = `
.glow-effect {
  position: relative;
}
.glow-effect::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #00d4ff, #1a73e8);
  filter: blur(8px);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: -1;
}
.glow-effect:hover::after {
  opacity: 1;
}
`;

document.head.insertAdjacentHTML("beforeend", `<style>${glowEffectStyles}</style>`);
