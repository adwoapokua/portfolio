import Desktop from "./desktop"
import Mobile from "./mobile"

export function About() {
  const skills = [
  {
    title: "Java & Spring Boot",
    category: "Backend",
    description:
      "Building REST APIs, authentication systems, and scalable backend applications using Spring Boot and Java.",
  },
  {
    title: "ReactJS",
    category: "Frontend",
    description:
      "Creating responsive and interactive web applications with reusable components and modern UI practices.",
  },
  {
    title: "System Design",
    category: "Software Engineering",
    description:
      "Designing scalable systems, modeling application architecture, and planning software solutions from requirements to implementation.",
  },
  {
    title: "HTML, CSS & JavaScript",
    category: "Web Development",
    description:
      "Developing responsive websites and dynamic user interfaces using core web technologies.",
  },
  {
    title: "Technical Mentorship",
    category: "Education",
    description:
      "Teaching programming concepts, coordinating workshops, and mentoring students in STEM and technology programs.",
  },
  {
    title: "Problem Solving & Algorithms",
    category: "Computer Science",
    description:
      "Applying analytical thinking, data structures, algorithms, and mathematical reasoning to solve technical problems.",
  },
];

  return (
    <section id="about" className="scroll-mt-24 py-16">
      <div className="hidden lg:block">
        <Desktop skills={skills}/>
      </div>
      <div className="lg:hidden block ">
        <Mobile skills={skills}/>
      </div>
    </section>
  )
}
