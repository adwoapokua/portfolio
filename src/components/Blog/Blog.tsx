import Desktop from "./desktop";
import Mobile from "./mobile";

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-20 py-6 lg:min-h-screen">
      <div className="hidden lg:block">
        <Desktop />
      </div>
      <div className="lg:hidden">
        <Mobile />
      </div>
    </section>
  );
}