import Desktop from "./desktop";
import Mobile from "./mobile";

export function Contact() {
  return (
    <section id="contact" className="h-screen scroll-mt-20 flex flex-col mx-30">
        <div className="hidden lg:block">
        <Desktop/>
      </div>
      <div className="lg:hidden block">
        <Mobile/>
      </div>
    </section>
  )
}
