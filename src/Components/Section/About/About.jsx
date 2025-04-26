import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "TailwindCSS",
    "Bootstrap",
  ];

  const backendSkills = ["MySQL", "APIs", "Basic Backend Development"];

  const handleCardClick = (cardName) => {
    if (selectedCard === cardName) {
      setSelectedCard(null);  // Deselect the card if it's clicked again
    } else {
      setSelectedCard(cardName);  // Select the clicked card
    }
  };

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-900 to-gray-800 transition-all duration-300 ${
        selectedCard ? "backdrop-blur-sm" : ""
      }`}
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6 relative">
          <h2 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend Skills */}
            <div
              className={`${
                selectedCard === "frontend" ? "scale-110 z-20" : "z-10"
              } rounded-2xl p-8 bg-gradient-to-r from-gray-800 to-gray-700 hover:shadow-[0_4px_30px_rgba(39,132,46,0.2)] transition-all cursor-pointer transform duration-300 ease-in-out`}
              onClick={() => handleCardClick("frontend")}
            >
              <h3 className="text-2xl font-semibold mb-6 text-teal-400">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-teal-500/10 text-teal-300 py-2 px-4 rounded-full text-sm hover:bg-teal-500/20 
                                  hover:shadow-[0_2px_8px_rgba(72,187,174,0.4)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div
              className={`${
                selectedCard === "backend" ? "scale-110 z-20" : "z-10"
              } rounded-2xl p-8 bg-gradient-to-r from-gray-800 to-gray-700 hover:shadow-[0_4px_30px_rgba(255,183,77,0.8)] transition-all cursor-pointer transform duration-200 ease-in-out`}
              onClick={() => handleCardClick("backend")}
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-700">
                Backend
              </h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-300 py-2 px-4 rounded-full text-sm hover:bg-blue-500/20 
                                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div
            className={`${
              selectedCard === "education" ? "scale-110 z-20" : "z-10"
            } p-8 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 hover:shadow-[0_4px_30px_rgba(255,105,180,0.8)] transition-all cursor-pointer transform duration-300 ease-in-out mt-12 mb-20`}
            onClick={() => handleCardClick("education")}
          >
            <h3 className="text-2xl font-semibold mb-6 text-pink-400">
              🏫 Education
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
              <li>
                <strong>B.Sc. in Computer Science</strong> - Ahsanullah University
                of Science and Technology (2020-2025)
              </li>
              <li>
                Thesis: Intelligent Choices: Common Sense-Driven Bengali Multiple
                Choice Question Answering
              </li>
            </ul>
          </div>

          {/* Skills and Concepts */}
          <div
            className={`${
              selectedCard === "skills" ? "scale-110 z-20" : "z-10"
            } p-8 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 hover:shadow-[0_4px_30px_rgba(255,255,0,0.8)] transition-all cursor-pointer transform duration-300 ease-in-out`}
            onClick={() => handleCardClick("skills")}
          >
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400">
              🛠 Skills and Concepts
            </h3>
            <div className="space-y-5 text-gray-300 text-lg">
              <div>
                <h4 className="font-semibold">Programming Languages</h4>
                <p>
                  Proficient in <strong>C++</strong>, <strong>Python</strong>,{" "}
                  <strong>C#</strong>, and <strong>PHP</strong>.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Core Concepts</h4>
                <p>
                  Strong understanding of <strong>Data Structures and Algorithms (DSA)</strong> and{" "}
                  <strong>Object-Oriented Programming (OOP)</strong>.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Soft Skills</h4>
                <p>
                  Excellent <strong>team collaboration</strong>,{" "}
                  <strong>problem-solving</strong>, and <strong>communication skills</strong>.
                  Adaptable to learning new technologies and frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
