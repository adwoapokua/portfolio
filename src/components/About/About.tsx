import Desktop from "./desktop"
import Mobile from "./mobile"

import {
  FaReact,
  FaJava,
  FaJs,
  FaSitemap,
  FaPython,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiDjango,
  SiTypescript,
} from "react-icons/si";


export function About() {
  const skills= [
  FaJava,
  SiSpringboot,
  FaReact,
  FaPython,
  SiDjango,
  FaJs,
  SiTypescript,
  FaSitemap,
];


  return (
    <section id="about" className="scroll-mt-24 py-6 lg:min-h-screen snap-start">
      <div className="hidden lg:block">
        <Desktop skills={skills}/>
      </div>
      <div className="lg:hidden block ">
        <Mobile skills={skills}/>
      </div>
    </section>
  )
}
