import type { IconType } from "react-icons/lib";

type Props = {
  skills: IconType[];
};

function Mobile({ skills }: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-50 mx-5 sm:mx-10 lg:mx-30">

        <div className="w-full lg:w-180">
          <p className="text-3xl sm:text-4xl font-semibold text-black mb-6 lg:mb-10">
            About Me
          </p>
          <div className="flex flex-col gap-4 lg:gap-5 text-base sm:text-lg text-primary">
            <p>
              I am a multidisciplinary developer and designer based at the intersection of aesthetic precision and
              functional excellence. My journey in technology began with a fascination for how digital interfaces
              could bridge the gap between human intent and machine logic. Today, I specialize in crafting
              immersive web experiences that prioritize user agency and visual harmony.
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

        <div className="bg-white w-full lg:w-100 rounded-3xl flex flex-col gap-4 lg:gap-5 justify-center px-8 sm:px-12 lg:px-15 py-8 lg:py-0 lg:h-130">

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-5">

            {[
              { value: "2024", label: "Started coding" },
              { value: "5+",   label: "# of projects" },
              { value: "2",    label: "# of blog posts" },
              { value: "3rd",  label: "current uni level" },
            ].map(({ value, label }) => (
              <div key={label} className="flex gap-4 lg:gap-7">
                <div className="relative flex justify-center">
                  <div className="w-0.5 bg-gray-300 h-16 lg:h-22" />
                  <div className="absolute top-2 w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary-foreground border-4 border-purple-200" />
                </div>
                <div>
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                    {value}
                  </p>
                  <p className="text-sm sm:text-base">{label}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <div className="mx-5 sm:mx-10 lg:mx-30 flex flex-col gap-4 lg:gap-5 mt-8 lg:mt-10">
        <p className="text-primary-foreground text-sm sm:text-lg tracking-widest">TOOLKIT</p>
        <div className="relative flex overflow-hidden py-4 gap-8 sm:gap-10 mx-0 sm:mx-5 lg:mx-10 z-0 isolate">
          <div className="flex shrink-0 animate-marquee gap-8 sm:gap-10 min-w-max items-center">
            {skills.map((icon, index) => {
              const Icon = icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 whitespace-nowrap text-secondary-foreground"
                >
                  <Icon size={32} className="sm:text-[40px]" />
                </div>
              );
            })}
          </div>
          <div
            aria-hidden="true"
            className="flex shrink-0 animate-marquee gap-8 sm:gap-10 min-w-max items-center"
          >
            {skills.map((icon, index) => {
              const Icon = icon;
              return (
                <div
                  key={`duplicate-${index}`}
                  className="flex items-center gap-2 whitespace-nowrap text-secondary-foreground"
                >
                  <Icon size={32} className="sm:text-[40px]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;