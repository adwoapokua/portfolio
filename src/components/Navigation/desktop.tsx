import { Button } from "../ui/button";

const links = [
  {
    label: "Home",
    href: "/#home"
  },
  {
    label: "About",
    href: "/#about"
  },
  {
    label: "Projects",
    href: "/#projects"
  },
  {
    label: "Blog",
    href: "/#blog"
  },
  {
    label: "Contact",
    href: "/#contact"
  }
]


function Desktop() {
  return (
    <>
      <div className="flex justify-between p-4">
        <div className="flex gap-4 items-center">
          <div className="w-8 h-8 text-primary-foreground border-2 border-primary-foreground rounded-4xl grid place-content-center font-bold">AP</div>
          <span className="text-xl font-semibold">Adwoa Pokua</span>
        </div>
        <div className="flex items-center">
          <nav className="flex gap-5 font-semi-bold">
          {
            links.map(({label, href}) =>
            {
              return (
                <a href={href} className="text-secondary hover:text-primary-foreground hover:border-b-2 hover:border-secondary-foreground hover:pb-1 hover:text-bold">
                  {label}
                </a>
              )
            }
            )
          }
          </nav>
        </div>
        <div>
          <a href="/resume.pdf" download="Aboagye,AdwoaPokuaCV.pdf"><Button>Hire Me</Button></a>
        </div>
      </div>
    </>
  )
}

export default Desktop;
