import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";

function Contact() {
  return (
    <div className="px-4 sm:px-8 py-8">
      <p className="text-3xl font-semibold text-gray-400 text-center mb-2">
        Say Hi
      </p>
      <p className="text-sm text-secondary text-center leading-relaxed mb-8 px-2">
        Have a question or want to work together? Feel free to reach out.
      </p>

      <div className="flex flex-col gap-10">
        {/* Form */}
        <form
          className="flex flex-col gap-6 bg-white rounded-3xl w-full p-6 sm:p-10"
          action="https://formspree.io/f/xbdlzver"
          method="POST"
        >
          <div className="flex flex-col gap-2">
            <label className="text-secondary-foreground font-semibold text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full h-10 border-gray-300 border-2 rounded-lg shadow px-3 focus:outline-none focus:border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-secondary-foreground font-semibold text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full h-10 border-gray-300 border-2 rounded-lg shadow px-3 focus:outline-none focus:border-gray-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-secondary-foreground font-semibold text-sm sm:text-base">
              Message
            </label>
            <textarea
              name="message"
              className="w-full min-h-[120px] border-gray-300 border-2 rounded-2xl shadow p-3 focus:outline-none focus:border-gray-400 resize-none"
            />
          </div>

          <Button type="submit" className="w-full sm:w-fit">
            Send message <PaperAirplaneIcon className="size-4 ml-1" />
          </Button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row sm:gap-8 sm:items-start px-1">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-secondary-foreground tracking-widest uppercase">
              Email me directly
            </p>
            <p className="text-sm sm:text-base text-primary-foreground font-bold break-all">
              aboagyeadwoapokua@gmail.com
            </p>
          </div>

          <div className="hidden sm:block w-0.5 h-10 bg-gray-300 self-center" />
          <div className="block sm:hidden h-px w-full bg-gray-200" />

          <div className="flex flex-col gap-1">
            <p className="text-xs text-secondary-foreground tracking-widest uppercase">
              Socials
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://github.com/adwoapokua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
              >
                Github
              </a>
              
              <a
                href="https://www.instagram.com/adwoapokua.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/adwoa-pokua-aboagye-a22293298/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;