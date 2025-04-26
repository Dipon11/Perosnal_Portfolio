import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./Components/Loading Section/LoadingScreen";

import "./index.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { MobileMenu } from "./Components/Section/MobileMenu/MobileMenu";
import { Home } from "./Components/Section/Home/Home";
import { About } from "./Components/Section/About/About";
import { Projects } from "./Components/Section/Projects/Projects";
import { Contact } from "./Components/Section/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const[isTyping , settyping] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
              <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
              {!isTyping && <Home onComplete={()=> settyping(true)}></Home>}
              <About></About>
              <Projects></Projects>
              <Contact></Contact>
              <Footer></Footer>
           
      </div>
    </>
  );
}

export default App;
