import { RevealOnScroll } from "../RevealOnScroll";
import image from "../../../assets/dipon.png";
import { useEffect, useState } from "react";

export const Home = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Dipon Das />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          // onComplete();
        }, 1000);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <RevealOnScroll>
        <div className="flex flex-col-reverse md:flex-row lg:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-24">
          {/* Left Section: Text */}
          <div className="text-center md:text-left flex-1 z-10 mr-0 md:mr-20 mb-6 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl sm:mn-10 font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight relative">
              <span className="typewriter">
                Hi, I'm{" "}
                <span className="animate-blink bg-clip-text text-transparent">
                  {text}
                </span>
              </span>
            </h1>
            <p className="text-gray-400 text-xl mb-8 max-w-lg mx-auto md:mx-0">
              I’m a passionate front-end web developer specializing in creating
              clean, responsive, and user-focused web interfaces. I strive to
              deliver solutions with exceptional performance and an engaging user
              experience.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white rounded-4xl py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Section: Image with Animation */}
          <div className="relative flex-1 max-w-sm mt-10 md:mt-0">
            {/* Glowing Animated Circular Background */}
            <div className="absolute inset-0 flex justify-center items-center ">
              {/* Outer Glow Circle */}
              <div
                className="w-64 h-64 rounded-full animate-spin-slow bg-gradient-to-r from-blue-700 via-cyan-400 to-blue-500 
      opacity-50 blur-xl brightness-150 shadow-[0_0_100px_rgba(0,200,255,0.9)] transition-all duration-700"
              ></div>

              {/* Inner Pulse Circle */}
              <div
                className="absolute w-58 h-38  animate-spin-reverse bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 
      opacity-70 blur-md shadow-[0_0_80px_rgba(0,255,255,1)] animate-pulse-slow "
              ></div>
            </div>

            {/* Profile Image */}
            <img 
              src={image}
              alt="Dipon Das"
              className="w-full  relative z-10 rounded-full shadow-[0_0_40px_rgba(0,255,255,0.7)]"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

// Typewriter and Circular Animation Styles
const animations = `
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid white;
  animation: typing 4s steps(20, end), blink 0.5s step-end infinite;
}

.animate-spin-slow {
  animation: spin-slow 10s linear infinite;
}

.animate-spin-reverse {
  animation: spin-reverse 15s linear infinite;
}
`;

// Add animations to the page
document.head.insertAdjacentHTML("beforeend", `<style>${animations}</style>`);
