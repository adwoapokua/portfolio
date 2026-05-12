import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { Button } from "../ui/button"

function Desktop() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-5xl text-black py-5 text-center font-bold">
        <span className="text-gray-400">Say Hi!</span> <br />
        and tell me about your <br />
        idea.
      </div>
        <div className="text-lg text-secondary pb-10">Have a question or want to work together? Feel free to reach out.</div>
        <div className="flex flex-col gap-15">
          <form className="flex flex-col gap-10 bg-white rounded-3xl w-165 h-110 p-12"  action="https://formspree.io/f/xbdlzver" method="POST">
            <div className="flex gap-20">
              <div className="flex flex-col gap-3">
                <label htmlFor="" className="text-secondary-foreground font-semibold">Name</label>
                <input type="text" className="w-60 h-10 border-gray-300 border-2 rounded-lg shadow" name="name"/>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="" className="text-secondary-foreground font-semibold">Email</label>
                <input type="email" className="w-60 h-10 border-gray-300 border-2 rounded-lg shadow" name="email"/>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-secondary-foreground font-semibold">Message</label>
              <textarea className="w-140 h-30 border-gray-300 border-2 rounded-2xl shadow " name="message"/>
            </div>
            <div>
              <Button type="submit">Send message <PaperAirplaneIcon className="size-4"></PaperAirplaneIcon> </Button>
            </div>
          </form>
          <div className="flex gap-5 mx-12">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-secondary-foreground">EMAIL ME DIRECTLY</p>
              <p className="text-xl text-primary-foreground font-bold">aboagyeadwoapokua@gmail.com</p>
            </div>
            <div className="w-0.5 h-10 bg-gray-300"></div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-secondary-foreground">SOCIALS</p>
              <p className="flex gap-2">
                <a href="https://github.com/adwoapokua" className="text-gray-500">Github</a>
                <a href="https://www.instagram.com/adwoapokua.ai/" className="text-gray-500">Instagram</a>
                <a href="https://www.linkedin.com/in/adwoa-pokua-aboagye-a22293298/" className="text-gray-500">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Desktop;
