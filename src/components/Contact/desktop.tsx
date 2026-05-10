import { PaperAirplaneIcon } from "@heroicons/react/24/outline"
import { Button } from "../ui/button"

function Desktop() {
  return (
    <>
      <div className="text-4xl text-black py-5">Say Hi</div>
        <div className="text-lg text-secondary pb-10">Have a question or want to work together? Feel free to reach out.</div>
        <form className="flex flex-col gap-10"  action="https://formspree.io/f/xbdlzver" method="POST">
          <div className="flex gap-20">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-secondary-foreground font-semibold">Name</label>
              <input type="text" className="w-70 h-10 border-gray-300 border-2 rounded-lg shadow" name="name"/>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-secondary-foreground font-semibold">Email</label>
              <input type="email" className="w-70 h-10 border-gray-300 border-2 rounded-lg shadow" name="email"/>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-secondary-foreground font-semibold">Message</label>
            <textarea className="w-160 h-30 border-gray-300 border-2 rounded-2xl shadow " name="message"/>
          </div>
          <div>
            <Button type="submit">Send message <PaperAirplaneIcon className="size-4"></PaperAirplaneIcon> </Button>
          </div>
        </form>
    </>
  )
}

export default Desktop;
