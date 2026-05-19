import { FaArrowRight } from "react-icons/fa"

type Project = {
  image: string
  title: string
  description: string
  stack: string[]
  link: string
}

type Props = {
  projects: Project[]
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 sm:h-56 object-cover"
      />
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 text-primary-foreground px-2 py-1 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-lg sm:text-xl font-bold">{project.title}</p>
        <p className="text-sm text-gray-600">{project.description}</p>
      </div>
    </a>
  )
}

function Portfolio({ projects }: Props) {
  return (
    <section className="px-4 sm:px-8 py-8 flex flex-col gap-6">
      <p className="text-primary-foreground text-sm tracking-widest uppercase">
        Portfolio
      </p>

      <div className="flex items-center justify-between">
        <p className="text-2xl sm:text-3xl font-semibold">Selected Projects</p>
        
        <a href="https://www.github.com/adwoapokua"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm sm:text-base hover:underline"
        >
          View all work <FaArrowRight className="mt-0.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio