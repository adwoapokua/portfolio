import { FaArrowRight} from "react-icons/fa"

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


function Desktop({projects}:Props) {
  return (
    <div className="mx-30 flex flex-col gap-5">
      <p className="text-primary-foreground">PORTFOLIO</p>
      <div className="flex justify-between">
        <p className="text-4xl text-center">Selected Projects</p>
        <a href="https://www.github.com/adwoapokua" target="_blank" className="flex gap-2"> View all work <FaArrowRight className="mt-1"></FaArrowRight> </a>
      </div>
      {/* Featured project */}
      <div className="grid grid-cols-4">
        <div className="w-140 h-120 bg-white rounded-2xl col-span-2">
          <div><img src="./mintr.png" alt="project" className="w-full h-80 rounded-t-2xl"/></div>
          <div className="p-5 flex flex-col gap-2">
            <div className="flex gap-2"><span className="bg-gray-300 text-primary-foreground p-2 text-xs rounded-3xl">Springboot</span> <span className="bg-gray-300 text-primary-foreground p-2 text-xs rounded-3xl">React</span></div>
            <p className="text-2xl font-bold">URL Shortener</p>
            <p className="text-sm">A web app that shortens links</p>
          </div>
        </div>
      
        {/* other projects */}
        <div className="grid grid-cols-2 gap-15 content-start col-span-2">
          {
            projects.map((project) => {
              return (
                <div className="w-80 h-120 bg-white rounded-2xl overflow-hidden">
                  <div><img src={project.image}  alt="project" className="w-full h-80 rounded-t-2xl object-cover"/></div>
                  <div className="p-5 flex flex-col gap-2">
                    <div className="flex gap-2"> 
                      {
                        project.stack.map((stack) =>{
                          return (
                            <span className="bg-gray-300 text-primary-foreground p-2 text-xs rounded-3xl">{stack}</span>
                          )
                        })
                      }
                    </div>
                    <p className="text-2xl font-bold">{project.title}</p>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div> 
      </div>
    </div>
  )
}

export default Desktop
