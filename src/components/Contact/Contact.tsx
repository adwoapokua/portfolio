import Desktop from "./desktop";
import Mobile from "./mobile";

export function Contact() {
  return (
    <section id="contact" className="lg:min-h-screen scroll-mt-20 flex flex-col md:mx-30 md:mt-30 md:mb-50">
        <div className="hidden lg:block">
        <Desktop/>
      </div>
      <div className="lg:hidden block">
        <Mobile/>
      </div>
    </section>
  )
}
