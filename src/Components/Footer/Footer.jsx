import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <a href="#home" className="font-mono text-2xl font-bold text-white tracking-wide">
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                dipon
              </span>
              <span className="text-gray-500">.dev</span>
            </a>
            <p className="mt-2 text-sm text-gray-400">
              Creating innovative, user-friendly web experiences with clean and scalable designs.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Dipon11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
              title="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/dipon-das-2332b9239/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
              title="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:dipondas1132@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-110"
              title="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center text-sm">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Dipon Das. All Rights Reserved.</p>
          <a
            href="#home"
            className="text-gray-400 hover:text-cyan-400 transition transform hover:scale-105"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
