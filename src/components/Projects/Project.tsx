import Desktop from "./desktop";
import Mobile from "./mobile";

export function Project() {
  const projects = [
    {
      image: "/bookreview.jpg",
      title: "Book Review API",
      description: "An API demo in Django",
      stack: ["Django", "DRF", "SQLite"],
      link: "https://github.com/Adwoa-p/apis"
    },
    {
      image: "/logo.png",
      title: "Audio App",
      description: "A mini audio app",
      stack: ["React", "Typescript", "Tailwind CSS"],
      link: "https://github.com/Adwoa-p/audio-app"
    }
  ];

  return (
   <section id="projects" className="h-screen scroll-mt-20 mt-150">
      <div className="hidden lg:block">
        <Desktop projects={projects}/>
      </div>
      <div className="lg:hidden block ">
        <Mobile projects={projects}/>
      </div>
   </section>
  );
}
