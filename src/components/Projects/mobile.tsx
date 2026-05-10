import { FaArrowRight } from "react-icons/fa";

type Project = {
  image: string;
  title: string;
  description: string;
  stack: string[];
  link: string;
};

type Props = {
  projects: Project[];
};

function Mobile({ projects }: Props) {
  return (
    <div className="px-4 py-8 flex flex-col gap-4">

      {/* HEADER ROW */}
      <p className="text-xs text-primary-foreground tracking-widest uppercase">
        Portfolio
      </p>

      <div className="flex items-center justify-between mb-1">
        <p className="text-2xl font-semibold">Selected Projects</p>
        <a
          href="https://www.github.com/adwoapokua"
          target="_blank"
          className="flex items-center gap-1.5 text-sm text-secondary"
        >
          View all <FaArrowRight className="size-3 mt-0.5" />
        </a>
      </div>

      {/* FEATURED PROJECT */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <img
          src="./mintr.png"
          alt="URL Shortener project"
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-300 text-primary-foreground px-2.5 py-1 text-xs rounded-full">
              Springboot
            </span>
            <span className="bg-gray-300 text-primary-foreground px-2.5 py-1 text-xs rounded-full">
              React
            </span>
          </div>
          <p className="text-xl font-bold">URL Shortener</p>
          <p className="text-sm text-secondary">A web app that shortens links</p>
        </div>
      </div>

      {/* OTHER PROJECTS — single column scroll */}
      <div className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            className="bg-white rounded-2xl overflow-hidden shadow-sm block"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-300 text-primary-foreground px-2.5 py-1 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-lg font-bold">{project.title}</p>
              <p className="text-sm text-secondary">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Mobile;