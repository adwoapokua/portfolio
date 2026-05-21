import type { IconType } from "react-icons/lib";

type Props = {
  skills: IconType[];
};


function Desktop({skills}:Props) {
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
            <div className="relative flex overflow-hidden py-4 gap-10 mx-10">
              <div className="flex shrink-0 animate-marquee gap-10 min-w-max items-center">
                {skills.map((icon, index) => {
                  const Icon = icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 whitespace-nowrap text-secondary-foreground"
                    >
                      <Icon size={40} />
                    </div>
                  );
                })}
              </div>
              <div
                aria-hidden="true"
                className="flex shrink-0 animate-marquee gap-10 min-w-max items-center"
              >
                {skills.map((icon, index) => {
                  const Icon = icon;

                  return (
                    <div
                      key={`duplicate-${index}`}
                      className="flex items-center gap-2 whitespace-nowrap text-secondary-foreground"
                    >
                      <Icon size={40} />
                    </div>
                  );
                })}
              </div>
            </div>
            
      </div>
    </div>
  )
}

export default Desktop;
