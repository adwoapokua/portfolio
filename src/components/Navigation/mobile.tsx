import { Bars4Icon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const links = [
  {
    label: "Home",
    href: "#home"
  },
  {
    label: "About",
    href: "#about"
  },
  {
    label: "Projects",
    href: "#projects"
  },
  {
    label: "Blog",
    href: "#blog"
  },
  {
    label: "Contact",
    href: "#contact"
  }
]


function Mobile() {
  return (
    <>
      <div className="flex justify-between p-4">
        <div className="flex gap-4 items-center">
          <a href="/#home"><div className="w-8 h-8 text-primary-foreground border-2 border-primary-foreground rounded-4xl grid place-content-center font-bold">AP</div></a>
          <span className="text-xl font-semibold">Adwoa Pokua</span>
        </div>
        <DropdownMenu modal={false}>
  <DropdownMenuTrigger><Button variant="ghost" className="text-primary"><Bars4Icon className="size-8 text-primary-foreground"></Bars4Icon></Button></DropdownMenuTrigger>
  <DropdownMenuContent className="mr-2">
    <DropdownMenuSeparator />
    <DropdownMenuItem>
        <nav className="flex flex-col gap-3 font-semi-bold">
          {
            links.map(({label, href}) =>
            {
              return (
                <a href={href} className="text-secondary hover:text-primary hover:text-semibold text-sm">
                  {label}
                </a>
              )
            }
            )
          }
          </nav>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</div>
    </>
  )
}

export default Mobile;
