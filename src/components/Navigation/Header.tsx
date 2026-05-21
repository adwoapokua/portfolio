import Desktop from "./desktop";
import Mobile from "./mobile";

function Header() {
  return (
    <header className="sticky top-0 bg-accent shadow-sm opacity-95 backdrop-blur-4xl z-50 ">
      <div className="hidden lg:block">
        <Desktop />
      </div>
      <div className="lg:hidden block ">
        <Mobile/>
      </div>
    </header>
  )
}

export default Header;
