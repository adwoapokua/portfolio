import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";

function Mobile() {
  return (
    <div className="">
      <p className="text-3xl font-semibold text-gray-400 text-center mb-2">
        Say Hi
      </p>
      <p className="text-sm text-secondary text-center leading-relaxed mb-8 px-2">
        Have a question or want to work together? Feel free to reach out.
      </p>

      <div className="flex flex-col gap-15">
          <form className="flex flex-col gap-8 bg-white rounded-3xl w-full h-auto p-12"  action="https://formspree.io/f/xbdlzver" method="POST">
              <div className="flex flex-col gap-3">
                <label htmlFor="" className="text-secondary-foreground font-semibold">Name</label>
                <input type="text" className="w-full h-10 border-gray-300 border-2 rounded-lg shadow" name="name"/>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="" className="text-secondary-foreground font-semibold">Email</label>
                <input type="email" className="w-full h-10 border-gray-300 border-2 rounded-lg shadow" name="email"/>
              </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="text-secondary-foreground font-semibold">Message</label>
              <textarea className="w-full min-h-[100px] border-gray-300 border-2 rounded-2xl shadow " name="message"/>
            </div>
            <div>
              <Button type="submit">Send message <PaperAirplaneIcon className="size-4"></PaperAirplaneIcon> </Button>
            </div>
          </form>
          <div className="flex gap-5 mx-12">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-secondary-foreground">EMAIL ME DIRECTLY</p>
              <p className="text-lg text-primary-foreground font-bold">aboagyeadwoapokua@gmail.com</p>
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
  );
}

export default Mobile;