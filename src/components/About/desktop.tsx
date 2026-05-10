import { Card, CardContent } from "../ui/card";

type skill = {
  title: string;
  category: string;
  description: string;
};

type props = {
  skills: skill[];
};

function Desktop({skills}:props) {
  return (
    <div className="flex flex-col">
      <div className="flex gap-50 mx-30">
        <div className="w-180">
          <p className="text-4xl font-semibold text-black mb-10">About Me</p>
          <div className="flex flex-col gap-5 text-lg text-primary">
            <p>
              I am a multidisciplinary developer and designer based at the intersection of aesthetic precision and 
              functional excellence. My journey in technology began with a fascination for how digital interfaces
                could bridge the gap between human intent and machine logic. Today, I specialize in crafting 
                immersive web experiences that prioritize user agency and visual harmony
            </p>
            <p>
              With a rigorous foundation in Computer Science and a self-taught eye for editorial design, I approach 
              every project as a balance between architectural stability and creative expression. I believe that 
              minimalism isn't the absence of design, but the perfect amount of it.
            </p>
            <p>
              Outside of the editor, you'll find me exploring the nuances of generative art, contributing to open-source 
              UI libraries, or documenting my learning journey through long-form technical writing. I am currently focused 
              on mastering reactive architectures and advanced motion systems.
            </p>
          </div>
        </div>
        <div className="bg-white w-100 h-130 rounded-3xl flex flex-col gap-5 justify-center px-15">
          <div className="flex gap-7">
            <div className="relative flex justify-center">
              <div className="w-0.5 bg-gray-300 h-22"></div>
              <div className="absolute top-2 w-4 h-4 rounded-full bg-primary-foreground border-4 border-purple-200"></div>
            </div>
            <div>
              <p className="text-6xl font-bold text-primary-foreground">2024</p>
              <p>Started coding</p>
            </div> 
          </div>
          <div className="flex gap-7">
            <div className="relative flex justify-center">
              <div className="w-0.5 bg-gray-300 h-22"></div>
              <div className="absolute top-2 w-4 h-4 rounded-full bg-primary-foreground border-4 border-purple-200"></div>
            </div>
            <div>
              <p className="text-6xl font-bold text-primary-foreground">5+</p>
              <p># of projects</p>
            </div> 
          </div>
          <div className="flex gap-7">
            <div className="relative flex justify-center">
              <div className="w-0.5 bg-gray-300 h-22"></div>
              <div className="absolute top-2 w-4 h-4 rounded-full bg-primary-foreground border-4 border-purple-200"></div>
            </div>
            <div>
              <p className="text-6xl font-bold text-primary-foreground">2</p>
              <p># of blog posts</p>
            </div> 
          </div>
          <div className="flex gap-7">
            <div className="relative flex justify-center">
              <div className="w-0.5 bg-gray-300 h-22"></div>
              <div className="absolute top-2 w-4 h-4 rounded-full bg-primary-foreground border-4 border-purple-200"></div>
            </div>
            <div>
              <p className="text-6xl font-bold text-primary-foreground">3rd</p>
              <p>current uni level</p>
            </div> 
          </div>
        </div>
      </div>
      <div className="mx-30 flex flex-col gap-5 mt-10">
        <p className="text-primary-foreground text-lg">TOOLKIT</p>
        <p className="text-4xl">Technical Skills</p>
        <div className="grid grid-cols-3 gap-5 w-300">
          {skills.map((skill, index) => (
        <Card
          key={index}
          className="rounded-2xl border bg-white shadow-sm"
        >
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground">
                <span className="text-white font-bold">{`</>`}</span>
              </div>

              <span className="rounded-full bg-primary-foreground px-3 py-1 text-xs font-medium text-white">
                {skill.category}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">
                {skill.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                {skill.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
        </div>
      </div>
    </div>
  )
}

export default Desktop;
