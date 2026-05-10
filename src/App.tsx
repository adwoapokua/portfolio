import Header from "./components/Navigation/Header";
import { NavLink } from "react-router";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight, FaArrowDown } from 'react-icons/fa';
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Contact  } from "./components/Contact";
import { Project } from "./components/Projects";
import { Button } from "./components/ui/button";
import { Link } from "react-router";

function App() {
  
  return (
    <>
    <Header />
    <div className="bg-accent overflow-hidden">

      {/* section 1 */}
       <section
      id="home"
      className="
        min-h-screen flex items-center justify-center
        px-4 py-16
        md:px-10 md:py-0
        lg:mx-30
      "
    >
      <div className="
        flex flex-col-reverse items-center gap-10 w-full
        md:flex-row md:justify-between md:gap-20
      ">
 
        {/* TEXT CONTENT */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
 
          <div className="flex flex-col gap-3">
            <p className="text-primary-foreground text-sm md:text-base">
              Hey, I'm Adwoa 👋
            </p>
 
            <p className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
              Student <br />
              <span className="text-primary-foreground">Dev</span>eloper
            </p>
 
            <p className="text-secondary-foreground text-sm md:text-lg">
              Computer Science & Mathematics · Problem Solver · Builder
            </p>
 
            <div className="flex gap-3 mt-4 flex-wrap justify-center md:justify-start">
              <Link to="#projects">
                <Button className="flex items-center gap-2">
                  See my projects <FaArrowDown />
                </Button>
              </Link>
              <Link to="#blog">
                <Button variant="outline" className="flex items-center gap-2">
                  Read my blog <FaArrowRight />
                </Button>
              </Link>
            </div>
          </div>
 
          {/* SOCIAL LINKS */}
          <div className="flex gap-6 mt-8">
            <NavLink to="https://github.com/Adwoa-p">
              <FaGithub size="28" className="text-secondary-foreground hover:text-primary-foreground transition-colors" />
            </NavLink>
            <NavLink to="https://www.instagram.com/adwoaa_p/">
              <FaInstagram size="28" className="text-secondary-foreground hover:text-primary-foreground transition-colors" />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/adwoa-pokua-aboagye-a22293298/">
              <FaLinkedin size="28" className="text-secondary-foreground hover:text-primary-foreground transition-colors" />
            </NavLink>
          </div>
        </div>
 
        {/* PROFILE IMAGE */}
        <div className="shrink-0">
          <div className="border-2 border-dashed border-primary-foreground rounded-full p-3 md:p-5">
            <img
              src="./moi.png"
              alt="Adwoa"
              className="
                w-44 h-44
                sm:w-56 sm:h-56
                md:w-80 md:h-80
                lg:w-100 lg:h-100
                rounded-full object-cover border-4 border-white
              "
            />
          </div>
        </div>
 
      </div>
    </section>

      {/* section 2 */}
      <About/>

      {/* section 3 */}
      <Project/>

      {/* section 4 */}
      <Blog/>

      {/* section 5 */}
      <Contact/>

      <footer className="border-t border-gray-300 shadow h-15 p-5 text-secondary">
        <div className="flex justify-between">
          <p>© 2025 Adwoa Aboagye. All rights reserved.</p>
        </div>
      </footer>
    </div>
      </>
  )
}

export default App;
