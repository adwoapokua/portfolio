import { Card, CardContent } from "../ui/card";

type skill = {
  title: string;
  category: string;
  description: string;
};

type props = {
  skills: skill[];
};

function Mobile({ skills }: props) {
  return (
    <div className="flex flex-col px-4 py-8">

      {/* ABOUT */}
      <div className="w-full mb-8">
        <p className="text-2xl font-semibold text-black mb-4">
          About Me
        </p>

        <div className="flex flex-col gap-4 text-sm text-primary leading-relaxed">
          <p>
            I am a multidisciplinary developer and designer based at the
            intersection of aesthetic precision and functional excellence.
            My journey in technology began with a fascination for how digital
            interfaces could bridge the gap between human intent and machine
            logic.
          </p>

          <p>
            With a rigorous foundation in Computer Science and a self-taught
            eye for editorial design, I approach every project as a balance
            between architectural stability and creative expression.
          </p>

          <p>
            Outside of the editor, you'll find me exploring generative art,
            contributing to open-source UI libraries, or documenting my
            learning journey through technical writing.
          </p>
        </div>
      </div>

      {/* TIMELINE CARD — horizontal scroll on mobile */}
      <div className="bg-white rounded-2xl shadow-sm px-5 py-6 mb-10 overflow-x-auto">
        <div className="flex gap-6 min-w-max">
          {[
            { value: "2024", label: "Started coding" },
            { value: "5+", label: "Projects" },
            { value: "2", label: "Blog posts" },
            { value: "3rd", label: "Uni level" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-2 min-w-[72px]">
              <div className="relative flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary-foreground border-4 border-purple-200 mb-1" />
                <div className="w-0.5 bg-gray-300 h-10" />
              </div>
              <p className="text-3xl font-bold text-primary-foreground leading-none">
                {item.value}
              </p>
              <p className="text-xs text-gray-600 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="flex flex-col gap-4">

        <p className="text-primary-foreground text-xs tracking-widest uppercase">
          Toolkit
        </p>

        <p className="text-2xl font-semibold">Technical Skills</p>

        {/* SINGLE-COLUMN GRID ON MOBILE */}
        <div className="flex flex-col gap-4">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="rounded-2xl border bg-white shadow-sm"
            >
              <CardContent className="p-4 space-y-3">

                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground">
                    <span className="text-white text-xs font-bold">{`</>`}</span>
                  </div>

                  <span className="rounded-full bg-primary-foreground px-3 py-1 text-xs font-medium text-white">
                    {skill.category}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-gray-900">
                    {skill.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-gray-600">
                    {skill.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mobile;