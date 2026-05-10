import Desktop from "./desktop";
import Mobile from "./mobile";

export function Blog() {

  return (
   <section id="blog" className="h-screen scroll-mt-20">
      <div className="hidden lg:block">
        <Desktop/>
      </div>
      <div className="lg:hidden block mt-70">
        <Mobile/>
      </div>
   </section>
  );
}
