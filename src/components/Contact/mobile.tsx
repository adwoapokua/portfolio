import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";

function Mobile() {
  return (
    <div className="">

      <p className="text-2xl font-semibold text-center mb-2">
        Say Hi
      </p>
      <p className="text-sm text-secondary text-center leading-relaxed mb-8 px-2">
        Have a question or want to work together? Feel free to reach out.
      </p>

      <form
        className="flex flex-col gap-5 w-70"
        action="https://formspree.io/f/xbdlzver"
        method="POST"
      >
        <div className="flex flex-col gap-3">
          <label className="text-sm text-secondary font-semibold">Name</label>
          <input
            type="text"
            name="name"
            className="w-full h-10 border-2 border-gray-300 rounded-lg shadow-sm px-3 text-sm focus:outline-none focus:border-primary-foreground"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm text-secondary font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="w-full h-10 border-2 border-gray-300 rounded-lg shadow-sm px-3 text-sm focus:outline-none focus:border-primary-foreground"
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-sm text-secondary font-semibold">Message</label>
          <textarea
            name="message"
            className="w-full h-28 border-2 border-gray-300 rounded-2xl shadow-sm px-3 py-2 text-sm resize-none focus:outline-none focus:border-primary-foreground"
          />
        </div>

        <Button type="submit" className="w-full flex items-center justify-center gap-2">
          Send message
          <PaperAirplaneIcon className="size-4" />
        </Button>
      </form>
    </div>
  );
}

export default Mobile;