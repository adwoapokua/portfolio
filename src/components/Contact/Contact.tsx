import Desktop from "./desktop";
import Mobile from "./mobile";

export function Contact() {
  return (
    <section id="contact" className="h-screen scroll-mt-20 flex flex-col ">
        <div className="hidden lg:block mx-30 mt-30 mb-50">
        <Desktop/>
      </div>
      <div className="lg:hidden block mx-15 mt-10 mb-40">
        <Mobile/>
      </div>
    </section>
  )
}
