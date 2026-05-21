import Desktop from "./desktop";
import Mobile from "./mobile";

export function Project() {
  const projects = [
    {
      image: "/bookreview.jpg",
      title: "Book Review REST API",
      description: "A RESTful API built with Django and Django REST Framework, supporting full CRUD operations for book reviews with token-based authentication.",
      stack: ["Django", "DRF", "SQLite"],
      link: "https://github.com/Adwoa-p/apis"
    },
    {
      image: "/logo.png",
      title: "Audio Player App",
      description: "A lightweight browser-based audio player with playback controls, track listing, and a clean UI built with React and TypeScript.",
      stack: ["React", "Typescript", "Tailwind CSS"],
      link: "https://github.com/Adwoa-p/audio-app"
    }
  ];

  return (
    <section id="projects" className="scroll-mt-20 py-6 lg:min-h-screen snap-start">
      <div className="hidden lg:block">
        <Desktop projects={projects} />
      </div>
      <div className="lg:hidden">
        <Mobile projects={projects} />
      </div>
    </section>
  );
}