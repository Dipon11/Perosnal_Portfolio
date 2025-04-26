import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Online Auction Website */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-teal-500/30 hover:shadow-[0_2px_8px_rgba(72,187,174,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Online Auction Website</h3>
              <p className="text-gray-400 mb-4">
                A fully responsive auction platform inspired by eBay, featuring
                real-time bidding and product management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-teal-500/10 text-teal-300 py-1 px-3 rounded-full text-sm hover:bg-teal-500/20 
                                    hover:shadow-[0_2px_8px_rgba(72,187,174,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://lucent-kringle-90912c.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/Dipon11/Auction-Site-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition-colors my-4"
                >
                  GitHub Repo →
                </a>
              </div>
            </div>

            {/* PatientsDoctors Appointment Booking */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Appointment Booking App</h3>
              <p className="text-gray-400 mb-4">
                A booking platform allowing patients and doctors to schedule
                appointments easily.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "CSS", "Netlify"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://680ac8f5af5989c1ab1ab7b7--inquisitive-travesseiro-430d7f.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/Dipon11/Appointment-Booking-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  GitHub Repo →
                </a>
              </div>
            </div>

            {/* Car Rental Website */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_4px_20px_rgba(252,211,77,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Car Rental Website</h3>
              <p className="text-gray-400 mb-4">
                An interactive car rental website with responsive design,
                vehicle browsing, and booking features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-yellow-500/10 text-yellow-300 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 
                                    hover:shadow-[0_2px_8px_rgba(252,211,77,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Dipon11/Bharar-Gari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors my-4"
                >
                  GitHub Repo →
                </a>
              </div>
            </div>

            {/* Railway Management System */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_4px_20px_rgba(239,68,68,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Railway Management System</h3>
              <p className="text-gray-400 mb-4">
                A desktop-based application for train schedules, ticket booking,
                and admin control.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-red-500/10 text-red-300 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 
                                    hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Dipon11/Railway-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors my-4"
                >
                  GitHub Repo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
